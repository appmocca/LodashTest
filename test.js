/**
 * Main test function
 */

import * as _ from './lodash.js';
import * as test from './testModules.js';
import * as utils from './utils.js';
import colors from 'colors';
import { Command } from 'commander';

const program = new Command();

/**
 *  Setup commander
 */
program
  .version('0.0.2', '-v, --vers', 'output the current version')
  .description('A tester for your self-coded lodash')
  .option('-a, --all', 'Test all functions')
  .option('-o, --one <func>', 'Test one function')
  .option('-p, --part <area>', 'Test specific area of function(in lowercase), E.g. -p array');

program.parse(process.argv);

const options = program.opts();

if (options.all) testAll();
else if (options.part) testPart(options.part);
else if (options.one) {
  let method = options.one;
  test[method] ? test[method]() : utils.log(`This test: [${colors.cyan(method)}] is not implemented, please wait for future updates`);
}

/**
 *  Test all methods
 */
function testAll() {
  testPart('array');
}

/**
 * @param {string}options Choose one of the following areas: array, string
 */
function testPart(options) {
  switch (options) {
    case 'array': {
      utils.log(colors.bgBrightWhite('Array'));
      test.chunk();
      test.compact();
      test.concat();
      test.difference();
      test.differenceBy();
      test.differenceWith();
      break;
    }
    default: {
      utils.log('Please choose one of the following areas: ');
      utils.log('array');
      utils.log('string');
    }
  }
}
