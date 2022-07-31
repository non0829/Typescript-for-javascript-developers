export {};

const debugProfile = (name: string, age: number) => {
  console.log(name, age);
}

debugProfile("shota", 21);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["tom", 20];

debugProfile(...profile)