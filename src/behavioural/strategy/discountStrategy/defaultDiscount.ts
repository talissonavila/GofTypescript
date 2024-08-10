import { ECommerceShoppingCart } from '../shoppinCart/ecommerceShoppingCart';
import { DiscountStrategy } from './discountStrategy';

export class DefaultDiscount extends DiscountStrategy {
  protected discount: number = 5;

  getDiscount(cart: ECommerceShoppingCart): number {
    return super.getDiscount(cart) - this.discount;
  }
}
