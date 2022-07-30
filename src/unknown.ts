export {};

const kansu = (): number => 33;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = 10 + numberAny;
if (typeof numberUnknown === "number") {
  let sumUnknown = 10 + numberUnknown;
  console.log(sumUnknown);
}