/**
 * All tools
 */

import colors from 'colors';
import * as _ from './lodash.js';
import { description } from './methodDescription.js';

/**
 * @param message console.log information or your solution
 * @param ans correct answer
 */
export function log(message, ans) {
  if (typeof message === 'string') {
    console.log(message);
  } else {
    if (checkAns(ans, message)) {
      console.log(colors.green('Correct'));
    } else {
      console.log(colors.yellow('Wrong! Your solution: '), message, colors.yellow('vs. Correct answer: '), ans);
    }
  }
}

/**
 * @param solution Your solution
 * @param ans Correcct answer
 * @returns {boolean} Return if the solution is correct
 */
export function checkAns(solution, ans) {
  return JSON.stringify(solution) === JSON.stringify(ans);
}

/**
 * @param {string} fn Method name
 * @param {string} des Method description
 * @param {any} test1 Test1
 * @param {any} ans1 Answer1
 * @param {any} [test2] Test2
 * @param {any} [ans2] Answer2
 */
export function check(fn, testDes, test1, ans1, test2, ans2) {
  const des = description[fn.replace('_.', '')];
  if (test2 && ans2) {
    if (checkAns(test1, ans1) && checkAns(test2, ans2)) {
      log(fn + ' ' + colors.green('Correct'));
    } else if (_.isUndefined(test1) && _.isUndefined(test2)) {
      log(fn + ' ' + colors.yellow('Not implemented yet'));
    } else {
      printSolution(fn, des, testDes, test1, ans1, test2, ans2);
    }
  } else {
    if (checkAns(test1, ans1)) {
      log(fn + ' ' + colors.green('Correct'));
    } else if (_.isUndefined(test1)) {
      log(fn + ' ' + colors.yellow('Not implemented yet'));
    } else {
      printSolution(fn, des, testDes, test1, ans1);
    }
  }
}

/**
 * @param {string} fn Method name
 * @param {string} des Method description
 * @param {Array<string>} testDes Test descriptions
 * @param {any} test1 Test1
 * @param {any} ans1 Answer1
 * @param {any} [test2] Test2
 * @param {any} [ans2] Answer2
 */
export function printSolution(fn, des, testDes, test1, ans1, test2, ans2) {
  log('----------------------------------------------------------------');
  log(fn);
  log(des);
  log('');
  log('Test1: ' + colors.cyan(testDes[0]));
  log(test1, ans1);
  if (test2 && ans2) {
    log('Test2: ' + colors.cyan(testDes[1]));
    log(test2, ans2);
  }
  log('----------------------------------------------------------------');
}
