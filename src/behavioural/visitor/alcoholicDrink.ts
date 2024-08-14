import { TaxVisitorProtocol } from './taxVisitorProtocol';
import { VisitableProduct } from './visitableProduct';

export class AlcoholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('Alcoholic Drink', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}
