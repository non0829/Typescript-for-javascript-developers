export {};

// クラスの定義（セミコロンは書かない）
class Person {
  // Typescriptの部分
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string; 
  // ここまで
  // コンストラクターの引数もアノテーションする, 戻り値の型宣言はしない（値を返さないため）
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

// インスタンスの生成
let taro = new Person("taro", 33, "Japan");

console.log(taro.name);
console.log(taro.profile());
// console.log(taro.profile())