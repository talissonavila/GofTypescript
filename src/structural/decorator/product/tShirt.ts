import { ProductProtocol } from './productProtocol';

export class TShirt implements ProductProtocol {
  private name = 'Shirt';
  private price = 10.0;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
