export {};

class Person {
  // public name: string;
  // protected age: number;

  // 初期化する時の簡略記法、アクセス修飾子を引数に書く
  constructor(public name: string, protected age: number) {}
}

const me = new Person('me', 43);

console.log(me);