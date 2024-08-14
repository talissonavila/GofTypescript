import { TaxVisitorProtocol } from './taxVisitorProtocol';
import { VisitableProduct } from './visitableProduct';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
