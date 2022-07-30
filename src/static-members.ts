export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'shota';
  static lastName: string = "Nozaki";

  static work() {
    return `hi guys! This is ${this.firstName}`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());