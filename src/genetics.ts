export {};

// const echo = (arg: number): number =>  {
//   return arg;
// }

// const echo = (arg: string): string =>  {
//   return arg;
// }

//<T> ジェネリクスの宣言、型の引数
const echo = <T>(arg: T): T =>  {
  return arg;
}
// ジェネリクスの呼び出し
console.log(echo<number>(100))
console.log(echo<string>("hello genetics"))
console.log(echo<boolean>(true))

// ジェネリクスのクラス適応
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>("hello class_genetics").echo());
console.log(new Mirror<boolean>(true).echo());