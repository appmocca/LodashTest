'use strict';
export function chunk(arr, size) {
  const length = arr.length;
  if (length <= size) return arr;
  let ans = [];
  let pos = 0,
    ansidx = 0;
  while (pos < length) {
    ans[ansidx++] = arr.slice(pos, (pos += size));
  }
  return ans;
}

export function compact(arr) {
  var ans = [];
  arr.forEach(function (ele) {
    if (ele) ans.push(ele);
  });
  return ans;
}

export function concat(arr) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i][0]) arr.push(arguments[i]);
    for (var j = 0; j < arguments[i].length; j++) arr.push(arguments[i][j]);
  }
  return arr;
}

export function difference(arr) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var ans = [];
  var record = concat(values);
  for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
    var v = arr_1[_a];
    if (record.indexOf(v) == -1) ans.push(v);
  }
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
    for (let i = 0; i < arr.length; i++)
      if (!ref.includes(f(arr[i]))) ans.push(arr[i]);
  }
  if (typeof f == 'string') {
    ref = ref.map(x => x[f]);
    for (var i = 0; i < arr.length; i++)
      if (!ref.includes(arr[i][f])) ans.push(arr[i]);
  }
  if (Array.isArray(f)) {
    values.push(f);
    return difference(arr, ...values);
  }
  return ans;
}

let arr = [
  [2, 1],
  [2, 3]
];
