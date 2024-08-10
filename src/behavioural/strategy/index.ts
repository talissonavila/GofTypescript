import { FiftyPercentDiscount } from './discountStrategy/fiftyPercentDiscount';
import { ECommerceShoppingCart } from './shoppinCart/ecommerceShoppingCart';

const shoppingcart = new ECommerceShoppingCart();
shoppingcart.discount = new FiftyPercentDiscount();
// shoppingcart.discount = new DefaultDiscount();
shoppingcart.addProduct({ name: 'Shirt', price: 50 });
shoppingcart.addProduct({ name: 'boot', price: 50 });
console.log(shoppingcart.getTotalWithDiscount());
console.log(shoppingcart.getTotal());
