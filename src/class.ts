abstract class Person {
  static species = 'Homo sapience';
  constructor(readonly name: string, readonly age: number) {
    this.name = name;
    this.age;
  }

  greeting(this: Person) {
    // staticな変数の使用方法
    const species = Person.species;
    console.log(`Hello. Im ${this.name}. ${species}`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

class Scientist extends Person {
  // シングルトンパターン
  private static instance: Scientist;
  static getInstance() {
    if (!Scientist.instance) {
      Scientist.instance = new Scientist('nozel', 55, 'chemistry');
      return Scientist.instance;
    }
    return Scientist.instance;
  }
  explainJob() {
    console.log(`Im a scientist and I study ${this.topic}`);
  }
  get topic() {
    return this._topic;
  }
  set topic(value) {
    this._topic = value;
  }
  private constructor(name: string, age: number, private _topic: string) {
    super(name, age);
  }
}

const scientist = Scientist.getInstance();
// シングルトンパターンの場合、インスタンスは一つしか作成されない
const scientist2 = Scientist.getInstance();
console.log(scientist, scientist2);
scientist.greeting();
scientist.topic = 'effects of climate change';
// staticプロパティは継承先でも使用可
console.log(Scientist.species);
