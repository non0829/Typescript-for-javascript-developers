export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let Taro = new Person('Taro', 30);

console.log(Taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>

const profile: Profile = ['shota', 44];

const ham = new Person(...profile);

console.log(ham)