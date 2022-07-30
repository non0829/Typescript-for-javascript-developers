export {};

// 複数形にするのが定石
enum Months {
  January = 1, // 最初に初期値を設定すれば以下にも反映される
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

Months.January;
Months.February;

console.log(Months.February);

enum COLORS {
  RED = "#FF0000",
  GREEN = "#008000",
  BLACK = "#FFFFFF"
}

let green = COLORS.GREEN;
console.log(green);

enum COLORS {
  YELLOW = "FFFF00",
}

COLORS.YELLOW;