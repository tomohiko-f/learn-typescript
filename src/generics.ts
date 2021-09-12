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
