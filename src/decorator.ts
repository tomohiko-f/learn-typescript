/**
 * decorationはクラス全体、部分的に設定することができる
 * classの定義時に実行されている　→　インスタンス生成時ではない
 * デフォルトだとパラメーターを追加できない　→　decorator factoryを使うことで可能となる
 */

// decorator factory
function Logging(message: string) {
  return function (constructor: Function) {
    console.log('Logging....');
    console.log(constructor);
    console.log(message);
  };
}

function Component(template: string, selector: string) {
  // 引数がインスタンスを生成する必要がある場合、{ new(): ~ }　と書く（newは予約語）
  return function (constructor: {
    new (...args: any[]): { name: string; age: number };
  }) {
    const mountedElement = document.querySelector(selector);
    const instance = new constructor();
    if (mountedElement) {
      mountedElement.innerHTML = template;
      mountedElement.querySelector('h1')!.textContent = instance.name;
    }
  };
}

function PropertyLogging(target: any, propertyKey: '#app') {
  console.log(target, propertyKey);
}

@Component('<h1>{{ name }}</h1>', '#app')
@Logging('User!!!')
class User {
  name = 'Tom';
  age = 22;
  constructor(name: string, age: number) {
    console.log('User was created!');
    console.log(name, age);
  }
}
