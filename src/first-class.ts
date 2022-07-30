export {};

// クラスの定義（セミコロンは書かない）
class Person {
  // Typescriptの部分
  name: string;
  age: number;
  // ここまで
  // コンストラクターの引数もアノテーションする, 戻り値の型宣言はしない（値を返さないため）
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// インスタンスの生成
let taro = new Person("taro", 33);

console.log(taro);
console.log(taro.profile())