import { MainDishBuilder } from './classes/mainDishBuilder';
import { VeganDishBuilder } from './classes/veganDishBuilder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDesert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getMeal().getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);
console.log('-----------------');
const veganMeal = new VeganDishBuilder();
veganMeal.makeMeal().makeBeverage();
console.log(veganMeal.getMeal());
console.log(veganMeal.getMeal().getPrice());
