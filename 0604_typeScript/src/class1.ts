class MyUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi my name is ${this.name}`;
  }
}

const myUser1 = new MyUser("John", 30);
myUser1.age;

// interface로 클래스의 spec을 명시할 수 있음!
interface IMyUser {
  name: string;
  age: number;
  greet: () => string;
}

class MyUser2 implements IMyUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi my name is ${this.name}`;
  }
}
