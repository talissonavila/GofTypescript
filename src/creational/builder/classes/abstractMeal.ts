import { MealCompositeContract } from '../interfaces/mealCompositeConctract';

export abstract class AbstractMeal implements MealCompositeContract {
  constructor(
    private name: string,
    private _price: number,
  ) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this._price;
  }
}
