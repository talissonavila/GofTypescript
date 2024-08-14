import { AlcoholicDrink } from './alcoholicDrink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './taxVisitorProtocol';

export class ArgentinaTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.25;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 2;
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.9;
  }
}
