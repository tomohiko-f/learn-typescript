// interfaceで関数を表現する場合
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;

interface Nameable {
  name?: string;
}

// extendsに複数指定することが可能
interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(
    public age: number,
    public experience: number,
    public name?: string
  ) {}
  greeting(message: string) {
    console.log('hello!!!!', message);
  }
}

const tmpDeveloper = {
  name: 'Tama',
  age: 33,
  experience: 4,
  greeting(message: string) {
    console.log('hello!!!!', message);
  },
};

// 構造的部分型
const user: Human = tmpDeveloper;
console.log(user);
const user2 = new Developer(33, 4);
// public name なら上書き可能
user2.name = 'Nira';
console.log(user2);
