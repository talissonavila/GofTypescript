import { MealCompositeContract } from '../interfaces/mealCompositeConctract';

export class MealBox implements MealCompositeContract {
  private readonly _children: MealCompositeContract[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeContract[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
