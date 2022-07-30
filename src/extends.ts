export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run!"
  }
}

class Rion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    // 親クラスから引き継ぐ
    super(name);
    
    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed}km!`
  }
}

// let animal = new Animal()

// console.log(animal.run());

// let rion = new Rion();

// console.log(rion.run());

let animal = new Animal('Mickey');
let rion = new Rion('Simba', 80);

console.log(animal.run())
console.log(rion.run())