import * as _ from "./lodash.js";
import colors from "colors";
import { Command } from 'commander';

const program = new Command();
program
    .version('0.0.1', '-v, --vers', 'output the current version')
    .description('A tester for your self-coded lodash')
    .option('-a, --all', 'Test all functions')
    .option('-o, --one <func>', 'Test one function')
    .option('-p, --part <area>', 'Test specific area of function(in lowercase), E.g. -p array');

program.parse(process.argv);

const options = program.opts();

if (options.all)
    testAll();
else if (options.part)
    testPart(options.part);
else if (options.one) {
    switch (options.one) {
        case 'chunk': { chunk(); break; }
        case 'concat': { concat(); break; }
        case 'compact': { compact(); break; }
        case 'difference': { difference(); break; }
        case 'differenceBy': { differenceBy(); break; }
        default: console.log('This test is not implemented, please wait for next updates');
    }
}
function log(message, ans) {
    if (typeof message === "string") {
        console.log(message);
    }
    else {
        if (JSON.stringify(ans) === JSON.stringify(message)) {
            console.log(colors.green("Correct"));
        }
        else {
            console.log(colors.yellow("Wrong! Your solution: "), message, colors.yellow("vs. Correct answer: "), ans);
        }
    }
}
function testAll() {
    testPart('array');
}
function testPart(options) {
    switch (options) {
        case 'array': {
            chunk();
            compact();
            concat();
            difference();
            differenceBy();
            break;
        }
        default: {
            log('Please choose one of the following areas: ');
            log('array');
            log('string');
        }
    }
}

function check(solution, ans) {
    return JSON.stringify(ans) === JSON.stringify(solution)
}

function chunk() {
    if (check(_.chunk(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"],]) && check(_.chunk(["a", "b", "c", "d"], 3), [["a", "b", "c"], ["d"]]))
        log("_.chunk", colors.green("Correct"))
    else {
        log("----------------------------------------------------------------");
        log("_.chunk");
        log("Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.");
        log("_.chunk(['a', 'b', 'c', 'd'], 2);");
        log(_.chunk(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"],]);
        log("_.chunk(['a', 'b', 'c', 'd'], 3);");
        log(_.chunk(["a", "b", "c", "d"], 3), [["a", "b", "c"], ["d"]]);
    }

}
function compact() {
    log("----------------------------------------------------------------");
    log("_.compact");
    log('Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.');
    log("_.compact([0, 1, false, 2, '', 3]);");
    log(_.compact([0, 1, false, 2, "", 3]), [1, 2, 3]);
}
function concat() {
    log("----------------------------------------------------------------");
    log("_.concat");
    log("Creates a new array concatenating array with any additional arrays and/or values.");
    log(_.concat([1], 2, [3], [[4]]), [1, 2, 3, [4]]);
}
function difference() {
    log("----------------------------------------------------------------");
    log("_.difference");
    log("Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.");
    log("_.difference([2, 1], [2, 3])");
    log(_.difference([2, 1], [2, 3]), [1]);
}
function differenceBy() {
    log("----------------------------------------------------------------");
    log("_.differenceBy");
    log("This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:");
    log("_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)");
    log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor), [1.2]);
}
