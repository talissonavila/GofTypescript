import { MealBuilderContract } from '../interfaces/mealBuilderContract';
import { Beans, Beverage, Rice, Salad } from './meal';
import { MealBox } from './mealBox';

export class VeganDishBuilder implements MealBuilderContract {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('White rice', 4.85);
    const beans = new Beans('Black beans', 7.8);
    const salad = new Salad('Ceasar salad', 39.99);
    this._meal.add(rice, beans, salad);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Lemon juice', 3.99);
    this._meal.add(beverage);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
