export {};

// 型の名前の拡張が可能
type Mojihairetu = string;

const fooString: string = "hello";
const fooMojiretu: Mojihairetu = "hello";

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: "name",
  age: 22,
};

// 元の型と動的に変化
type Profile2 = typeof example1;