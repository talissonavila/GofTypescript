import { TaxVisitorProtocol } from './taxVisitorProtocol';
import { VisitableProduct } from './visitableProduct';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
