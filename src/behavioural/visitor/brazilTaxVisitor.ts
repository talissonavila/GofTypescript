import { AlcoholicDrink } from './alcoholicDrink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './taxVisitorProtocol';

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1;
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5;
  }
}
