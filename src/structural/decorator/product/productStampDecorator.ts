import { ProductDecorator } from './productDecorator';

export class ProductStampDecorator extends ProductDecorator {
  getPrice(): number {
    return super.getPrice() + super.getPrice() * 0.25;
  }
  getName(): string {
    return this.product.getName() + ' - Stamped';
  }
}
