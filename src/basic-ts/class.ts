// class类 class定义了一切事物的抽象特点，object是类的实例
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}
const snake = new Animal("sss");
console.log(snake.run());

// class继承
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}
const dog = new Dog("doggy");
// console.log(dog.run())
console.log(dog.bark());

class Cat extends Animal {
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
  run() {
    // 要调用父类的方法用super
    return `Meow, ${super.run()}`;
  }
}
const mao = new Cat("miaomiao");
console.log(mao.run());

interface Radio {
  switchRadio(): void;
}
interface Battery {
  checkBatteryStatus(): void;
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void;
}
class Car implements Radio {
  switchRadio() {}
}
class Cellphone1 implements Radio, Battery {
  switchRadio() {}
  checkBatteryStatus() {}
}
class Cellphone implements RadioWithBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}

export { Car, Cellphone };
