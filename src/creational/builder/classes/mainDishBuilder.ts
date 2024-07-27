import { MealBuilderContract } from '../interfaces/mealBuilderContract';
import { Beans, Beverage, Desert, Meat, Rice } from './meal';
import { MealBox } from './mealBox';

export class MainDishBuilder implements MealBuilderContract {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('White rice', 4.85);
    const beans = new Beans('Black beans', 7.8);
    const meat = new Meat('Steak', 24.5);
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Lemon juice', 3.99);
    this._meal.add(beverage);
    return this;
  }

  makeDesert(): this {
    const desert = new Desert('pudim', 12.35);
    this._meal.add(desert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
