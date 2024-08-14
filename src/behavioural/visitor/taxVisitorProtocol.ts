import { AlcoholicDrink } from './alcoholicDrink';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForCigarette(cigarette: Cigarette): number;
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}
