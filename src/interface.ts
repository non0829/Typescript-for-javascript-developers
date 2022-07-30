export {};

class MahoTukai {}
class Soryo {}

class Taro extends MahoTukai {

}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

// interfaceの実装　クラスとは異なり複数の継承が可能となる
class Ziro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }

  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Ziro;
jiro.ionazun();
jiro.kougeki();