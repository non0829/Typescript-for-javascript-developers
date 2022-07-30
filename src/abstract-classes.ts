export {};

// 抽象クラス
abstract class Animal {
  // 抽象メソッド（クラスは抽象クラスでないといけない）
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

class Tiger extends Animal {
  cry() {
    return "tiger_roar"
  }
} 