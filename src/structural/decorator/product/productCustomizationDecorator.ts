import { ProductDecorator } from './productDecorator';

export class ProductCustomizationDecorator extends ProductDecorator {
  getPrice(): number {
    return super.getPrice() + super.getPrice() * 0.5;
  }
  getName(): string {
    return this.product.getName() + ' - Custom';
  }
}
