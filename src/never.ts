export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("test");
  console.log(result);
} catch (error) {
  console.log(error);
}

let foo: void = undefined;
// never型には値を返すことはできない、エラーのみ返すことが可能
// let bar: never = undefined;