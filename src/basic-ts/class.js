"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
// class类 class定义了一切事物的抽象特点，object是类的实例
var Animal = /** @class */ (function () {
  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.run = function () {
    return this.name + " is running";
  };
  return Animal;
})();
var snake = new Animal("sss");
console.log(snake.run());
// class继承
var Dog = /** @class */ (function (_super) {
  __extends(Dog, _super);
  function Dog() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Dog.prototype.bark = function () {
    return this.name + " is barking";
  };
  return Dog;
})(Animal);
var dog = new Dog("doggy");
// console.log(dog.run())
console.log(dog.bark());
var Cat = /** @class */ (function (_super) {
  __extends(Cat, _super);
  function Cat(name) {
    var _this = _super.call(this, name) || this;
    console.log(_this.name);
    return _this;
  }
  Cat.prototype.run = function () {
    return "Meow, " + _super.prototype.run.call(this);
  };
  return Cat;
})(Animal);
var mao = new Cat("miaomiao");
console.log(mao.run());
