/**
 * Your implement of lodash method
 */

'use strict';
export function chunk(arr, size) {
  const length = arr.length;
  if (length <= size) return arr;
  let ans = [],
    pos = 0,
    ansidx = 0;
  while (pos < length) {
    ans[ansidx++] = arr.slice(pos, (pos += size));
  }
  return ans;
}

export function compact(arr) {
  var ans = [];
  arr.forEach(function (ele) {
    if (!ele) ans.push(ele);
  });
  return ans;
}

export function concat(arr, ...values) {
  for (var i = 1; i < arguments.length; i++) {
    values[i - 1] = arguments[i];
  }
  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i][0]) arr.push(arguments[i]);
    for (var j = 0; j < arguments[i].length; j++) arr.push(arguments[i][j]);
  }
  return arr;
}

export function difference(arr, ...args) {
  var ans = [];
  var record = concat(...args); //Recording all compare values
  for (var v of arr) if (record.indexOf(v) == -1) ans.push(v); //If is different value, push to return array
  return ans;
}

export function differenceBy(arr, ...values) {
  var ans = [];
  var f = values.pop();
  var ref = values.reduce((ary1, ary2) => {
    return ary1.concat(ary2);
  }, []);
  if (typeof f == 'function') {
    ref = ref.map(x => f(x));
    for (let i = 0; i < arr.length; i++) if (!ref.includes(f(arr[i]))) ans.push(arr[i]);
  }
  if (typeof f == 'string') {
    ref = ref.map(x => x[f]);
    for (var i = 0; i < arr.length; i++) if (!ref.includes(arr[i][f])) ans.push(arr[i]);
  }
  if (Array.isArray(f)) {
    values.push(f);
    return difference(arr, ...values);
  }
  return ans;
}

export function differenceWith() {}

export function example() {
  /* Your implement */
}

// The following functions are the tools used to verify data type
export function isUndefined(value) {
  return value === undefined;
}
