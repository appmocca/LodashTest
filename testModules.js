/**
 * Individual lodash test module
 */
import * as _ from './lodash.js';
import * as utils from './utils.js';

export const chunk = () => {
  const fn = '_.chunk';
  const testDes = ['_.chunk(["a", "b", "c", "d"], 2)', '_.chunk(["a", "b", "c", "d"], 3)'];
  const test1 = _.chunk(['a', 'b', 'c', 'd'], 2);
  const test2 = _.chunk(['a', 'b', 'c', 'd'], 3);
  const ans1 = [
    ['a', 'b'],
    ['c', 'd']
  ];
  const ans2 = [['a', 'b', 'c'], ['d']];

  utils.check(fn, testDes, test1, ans1, test2, ans2);
};

export const compact = () => {
  const fn = '_.compact';
  const testDes = ["_.compact([0, 1, false, 2, '', 3])"];
  const test1 = _.compact([0, 1, false, 2, '', 3]);
  const ans1 = [1, 2, 3];

  utils.check(fn, testDes, test1, ans1);
};

export const concat = () => {
  const fn = '_.concat';
  const testDes = [];
  const test1 = _.concat([1], 2, [3], [[4]]);
  const ans1 = [1, 2, 3, [4]];

  utils.check(fn, testDes, test1, ans1);
};

export const difference = () => {
  const fn = '_.difference';
  const testDes = ['_.difference([2, 1], [2, 3])'];
  const test1 = _.difference([2, 1], [2, 3]);
  const ans1 = [1];

  utils.check(fn, testDes, test1, ans1);
};

export const differenceBy = () => {
  const fn = '_.differenceBy';
  const testDes = ['_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)'];
  const test1 = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  const ans1 = [1.2];

  utils.check(fn, testDes, test1, ans1);
};

export const differenceWith = () => {
  const fn = '_.differenceWith';
  const testDes = ["_.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual)"];
  const test1 = _.differenceWith(
    [
      { x: 1, y: 2 },
      { x: 2, y: 1 }
    ],
    [{ x: 1, y: 2 }],
    _.isEqual
  );
  const ans1 = [{ x: 2, y: 1 }];

  utils.check(fn, testDes, test1, ans1);
};
