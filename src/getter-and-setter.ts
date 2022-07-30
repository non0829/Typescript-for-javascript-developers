export {};



class MyNumberCard {
  // 慣習的に_を使う
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // get アクセサ
  get owner(): string {
    return this._owner
  }

  // set アクセサ
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return this._secretNumber;
  }
}

let card = new MyNumberCard('翔太', 12345);

// ゲッターを呼び出す時はメソッド呼び出しのように（）をつけない
console.log(card.owner)
// セッターを呼び出すのは普通の値の更新のように記載すればよい
card.secretNumber = 11;
console.log(card.debugPrint())