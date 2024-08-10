import { ECommerceShoppingCart } from '../shoppinCart/ecommerceShoppingCart';
import { DiscountStrategy } from './discountStrategy';

export class FiftyPercentDiscount extends DiscountStrategy {
  protected discount: number = 50;

  getDiscount(cart: ECommerceShoppingCart): number {
    return super.getDiscount(cart) - this.discount;
  }
}
