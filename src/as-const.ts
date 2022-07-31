export {};

let name = "Atushi";

// 型がAtuになり再代入できなくなる
let nickname = "Atu" as const;
// nickname = "AtuAtu";

// オブジェクトでもconstアサーションが可能になる
let profile = {
  name: "atishi",
  height: 178,
} as const;

// profile.name = "ati";
// profile.height = 170;