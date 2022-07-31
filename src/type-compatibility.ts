export {};

let foo: any;
let bar: string = "TypeScript";

console.log(typeof foo);

foo = bar;

console.log(typeof foo);

let fooin: string;
let barin: number = 1;

// fooin = barin;

let fooString: string;
let barString: string = "string";

fooString = barString;

let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1900 = 1900;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Person(43, "shota");