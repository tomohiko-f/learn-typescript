// 引数のオブジェクト内で定義したプロパティしか指定できないようにする
function copy<T extends { name: string; job: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  value[key];
  return value;
}

console.log(copy({ name: 'Marchin', job: 'musician' }, 'name'));
type Marchin = keyof { name: 'Marchin'; job: 'musician' };

// Utility type
interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>;
type ReadTodo = Readonly<Todo>;

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('hello');
  }, 3000);
});

fetchData.then((data) => {
  data.toLowerCase();
});

// default type
interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}

let tmp2: ResponseData;

// MappedTypes
interface Fruit {
  readonly apple: string;
  orange?: string;
}
// - をつけることで型定義時のオプションが無効化される
type MappedTypes = {
  -readonly [P in keyof Fruit]-?: string;
};

// Conditional Type -> 型のif文
type ConditionalTypes = 'kemio' extends string ? number : boolean;
type ConditionalInfer = { kemio: string } extends { kemio: infer R }
  ? R
  : boolean;
type DistributiveConditionalTypes<T> = T extends 'apple' ? number : boolean;
let tmp3: DistributiveConditionalTypes<'apple' | 'orange'>;
