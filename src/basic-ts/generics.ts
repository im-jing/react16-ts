// 定义函数或类的时候，不预先指定类型，而是在使用的时候再指定类型，这种特征叫泛型
function echo<T>(arg: T): T {
  return arg;
}

const res = echo(true);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
const res1 = swap(["abc", 123]);

// 约束泛型
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
const arr = echoWithArr([1, 2, 3]);

interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
const str = echoWithLength("str");
const obj = echoWithLength({ length: 10 });
const arr2 = echoWithLength([1, 2, 3]);

class Queue<T> {
  private data: T[] = [];

  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data[0];
    // return this.data.shift()
  }
}
const queue = new Queue<number>();
queue.push(1.6);
console.log(queue.pop().toFixed(), "=toFixed=");

const queue2 = new Queue<string>();
queue2.push("aaa");
console.log(queue2.pop().length);

export {};
