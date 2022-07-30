export {};

class VisaCard {
  constructor(public readonly owner: string) {} 
}

let myVisaCard = new VisaCard('shota');

console.log(myVisaCard);
// myVisaCard.owner = 'change';
