export interface PersonPrototype {
  clone(): PersonPrototype;
}

export class Person implements PersonPrototype {
  public addresses: Address[] = [];
  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

const address1 = new Address('Rua a', 122);
const person1 = new Person('Sid', 77);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Rua da amargura';

person2.name = 'Otavio';
console.log(person2);
console.log(person2.name);
console.log(person2.addresses);
