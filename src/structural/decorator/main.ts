import { ProductCustomizationDecorator } from './product/productCustomizationDecorator';
import { ProductStampDecorator } from './product/productStampDecorator';
import { TShirt } from './product/tShirt';

const shirt = new TShirt();
const stampedTshirt = new ProductStampDecorator(shirt);
const stampedDoubleTshirt = new ProductStampDecorator(stampedTshirt);
const customShirt = new ProductCustomizationDecorator(shirt);

console.log(shirt.getPrice(), shirt.getName());
console.log(stampedTshirt.getPrice(), stampedTshirt.getName());
console.log(stampedDoubleTshirt.getPrice(), stampedDoubleTshirt.getName());
console.log(customShirt.getPrice(), customShirt.getName());
