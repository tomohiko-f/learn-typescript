## class

### 基本

- クラスを型として使える
- private にすることで、クラス内のみでアクセス可能となる
- readonly: class 内外で変数の値を上書きできなくなる
- protected: クラスの外からは参照できない、継承先のクラスでの参照は可　 private > protected
- ゲッターとセッターの名前が同じだと、セッターの引数ははゲッター返り値型が定義される
- static: インスタンスを作らなくても使用できるプロパティや関数を定義できる、継承先でも使用可能
- abstract: 継承にのみ使えるクラスを作成する為に使う、継承先で必ず使用するようなメソッドを定義
  - abstract はインスタンス化できない
  - abstract メソッドは abstract クラスからのみ使用可
- シングルトンパターン: 一つのインスタンスのみ作成する場合にし使用、e.g. フィットネスアプリでユーザーの設定データを管理するようなインスタンスを生成する場合とか

## interface

### type との違い

- interface はオブジェクトのみを定義する
- type はオブジェクト以外も定義できる

###   構造的部分型

- interface に定義されたプロパティより Class で定義されるプロパティの方が多くてもエラーにならない

### 基本

- implements でクラスでもつ値の型を適用できる
  - ただし、static プロパティなどには影響を与えない
  - あくまで、Class で生成されるインスタンスがもつ値に対して適用可能
- implements class 内で、readonly しているプロパティは影響を受けない(public name なら上書き可能)
- extends: interface を複数指定することが可能
- optional ?: ?をプロパティや引数につけることで、xx | undefined を定義することが可能、その場合 if (prop) {} のようなチェックが必要
  - 引数に optional をつける場合 -> function func(xxx: string, ooo?: number) のように optional 引数を後ろに定義する必要がある
- デフォルト引数を設定する場合：引数に何も指定をしなくてもエラーにならない

## より実践的な Ts の書き方

### type Guard

- typeof, in, instanceof の三つがある
- typeof: string や number, object など javascript に存在する型チェックが可能
- in: オブジェクトに定義したプロパティのチェックが可能
- instanceof: クラスを定義した instance のチェックが可能

###  tag 付き Union

- 変数にタグ（リテラル型）をつけることで、case 文などで推論させることが可能
  - interface でも使用可能

### インデックスシグネチャ

- interface の定義時に、[index: string]: string; で定義
- インデックスシグネチャで定義した型に合わせる必要がある

```
interface Musician {
  age: number; // これだとエラーにある（stringにする必要がある）
  [index: string]: string;
}
```

- 定義していないプロパティでもエラーにならないので注意

### optional chaining

- optional(?)で定義したプロパティに対して、アクセスする場合に使用
- `hoge?.mogu?.name` のように使う -> 値がなかった場合 undefined を返す

### nullish coalescing

- ??で定義
  - const musicianPlay = musician.name ?? 'do not play';
- null, undefined の場合のみに定義した値を返す
- ||との違い
  - ||の場合：左辺が空文字などでも右辺の値を返す

### 型の互換性

- 左辺＜右辺で定義されていれば使える -> これだけ覚えておく

### 関数の intersection

- let intersectionFunc: FuncA & FuncB -> FuncA, B がオーバーロードされたものになる
- union 型の場合は never 型になる
  - ただし、どちらかの関数を定義すれば使える

### rest parameter

- 可変長引数として定義できる
- タプルも可能
- 配列、タプルには readonly をつけることが可能

### const アサーション

- as const を変数につけることでリテラル型として定義できる
- 配列でも可能
- _enum を使わなくても、as const をつけることで enum っぽく定義できる_ よく使う

## Generics

- オブジェクトを引数で渡すとき
  - ジェネリクスと typeof を使うことで、引数のオブジェクト内で定義したプロパティしか指定できないようにすることができる

### utility

- 型のライブラリ
  - e.g. ReadOnly, Partial
- 定義した肩に対して、オプションを付与できる
