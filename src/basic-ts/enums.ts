enum Direction {
  Up = 10,
  Down,
  Left,
  Right,
}

// 常量枚举，编译出来的js只有最后结果，内联枚举的方法，提升性能
// const enum Direction {
//   Up = 10,
//   Down,
//   Left,
//   Right,
// }

console.log(Direction["Up"]);
console.log(Direction[10]);

export {};
