type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const nozel: EngineerBlogger = {
  name: 'nozel',
  role: 'backend',
  follower: 4000,
};

function toUpperCase<T extends string | number>(x: T) {
  if (typeof x == 'string') {
    return x.toUpperCase();
  }
  return x;
}
const upperHello = toUpperCase<string>('hello');

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

class Dog {
  cry: 'bow' = 'bow';
  speak() {
    console.log('bow-wow');
  }
}

class Bird {
  cry: 'piyo' = 'piyo';
  speak() {
    console.log('piyo-piyo');
  }
  fly() {
    console.log('flutter');
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  // tag付きUnion
  switch (pet.cry) {
    case 'bow':
      console.log('bow');
    case 'piyo':
      console.log('piyo');
  }
  pet.speak();
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Dog());

// 型アサーションで型を上書きする方法
// const input = document.getElementById('input') as HTMLInputElement;

// インデックスシグネチャ
interface Musician {
  name: string;
  // age: number; ->　エラーになる
  [index: string]: string;
}

const musician: Musician = {
  name: 'nico',
  1: 'sss',
};
// 定義していないプロパティでもエラーにならないので注意
console.log(musician.sssss);

// nullish coalescing -> null, undefinedの場合のみ'do not play'を返す
const musicianPlay = musician.name ?? 'do not play';
console.log(musicianPlay);

// rest parameter
// function advancedFn(...arg: number[]]) {}
// advancedFn(3, 3, 3);
// タプルも可能
function advancedFn(...arg: readonly [number, string, boolean]) {}
advancedFn(3, 'test', false);
