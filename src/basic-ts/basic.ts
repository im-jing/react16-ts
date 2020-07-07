// basic
const firstName: string = "abc";
const num: number = 123;

// any
let notSure: any = 999;
notSure = "abc";
notSure = true;
// notSure.getData()

// 联合类型：允许部分类型
let uni: number | string = 1;
uni = "mmm";

// array
const arrOfNumbers: number[] = [1, 2, 3];
const arrOfString: string[] = ["a", "b", "c"];
const arrOfAny: any[] = [1, 2, "a"];

// 类数组
function likeArray() {
  console.log(arguments);
}

// tuple元组 限定不同类型的一种数组
let user: [string, number] = ["viking", 2];

/* interface接口（obj）
  - 对对象的shape进行描述
  - 对class进行抽象
  - Duck Typing
*/
interface IPerson {
  readonly id: number;
  name: string;
  age?: number;
}
const newer: IPerson = {
  id: 10001,
  name: "tom",
  // age: 20,
};
// newer.id = 10002

// 函数
// 函数声明
// function add(x: number, y: number, z?: number): number {
//   if (typeof z === 'number') return x + y + z
//   return x + y
// }

// const result = add(1, 2)
// console.log(result)

// 函数表达式
const add = function (x: number, y: number, z?: number): number {
  if (typeof z === "number") return x + y + z;
  return x + y;
};

// 把add函数赋值给add2, 所以add2必须跟add相同类型
// =>不是箭头函数，是ts中声明函数类型返回值的方法
// ts中凡是:后面的都是声明类型
// const add2: string = add
const add2: (x: number, y: number, z?: number) => number = add;

export {
  firstName,
  num,
  notSure,
  uni,
  arrOfNumbers,
  arrOfString,
  arrOfAny,
  likeArray,
  user,
  newer,
  add,
};
