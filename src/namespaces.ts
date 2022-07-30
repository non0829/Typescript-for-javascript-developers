export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string,
    ) {}
  }
}


const me = new Japanese.Tokyo.Person("shota");

console.log(me.name);
const me_osaka = new Japanese.Osaka.Person("shota_osaka");

console.log(me_osaka.name);
const me2 = new English.Person("a", "b", "c");

console.log(me2.firstName, me2.middleName, me2.lastName);  