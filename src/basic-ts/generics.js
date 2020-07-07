"use strict";
exports.__esModule = true;
// 定义函数或类的时候，不预先指定类型，而是在使用的时候再指定类型，这种特征叫泛型
function echo(arg) {
  return arg;
}
var res = echo(true);
function swap(tuple) {
  return [tuple[1], tuple[0]];
}
var res1 = swap(["abc", 123]);
// 约束泛型
function echoWithArr(arg) {
  console.log(arg.length);
  return arg;
}
var arr = echoWithArr([1, 2, 3]);
function echoWithLength(arg) {
  console.log(arg.length);
  return arg;
}
var str = echoWithLength("str");
var obj = echoWithLength({ length: 10 });
var arr2 = echoWithLength([1, 2, 3]);
var Queue = /** @class */ (function () {
  function Queue() {
    this.data = [];
  }
  Queue.prototype.push = function (item) {
    return this.data.push(item);
  };
  Queue.prototype.pop = function () {
    return this.data[0];
    // return this.data.shift()
  };
  return Queue;
})();
var queue = new Queue();
queue.push(1.6);
console.log(queue.pop().toFixed(), "=toFixed=");
var queue2 = new Queue();
queue2.push("aaa");
console.log(queue2.pop().length);
