import { AlcoholicDrink } from './alcoholicDrink';
import { ArgentinaTaxVisitor } from './argentinaTaxVisitor';
import { BrazilTaxVisitor } from './brazilTaxVisitor';
import { Cigarette } from './cigarette';
import { Food } from './food';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcohoolicDrink = new AlcoholicDrink(20);

const cart = [food, cigarette, alcohoolicDrink];

const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);

const totalWithBrazilTaxes = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(new BrazilTaxVisitor()) + sum,
  0,
);

const totalWitArgentinaTaxes = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(new ArgentinaTaxVisitor()) + sum,
  0,
);

console.log('Total without taxes:', total);
console.log('Total with brazilian taxes:', totalWithBrazilTaxes);
console.log('Total with argentinian taxes:', totalWitArgentinaTaxes);
