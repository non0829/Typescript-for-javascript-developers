export {};

type Profile = {
  name: string;
  age: number;
}

const me: Profile = {
  name: "shota",
  age: 33
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>

const friend: PersonalDataType = {
  name: "tom",
  age: 20
}

// friend.age++;