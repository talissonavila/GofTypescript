import { ShoppingOrder } from './shoppingOrder';
import { ShoppingOrderState } from './shoppingOrderState';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Order can not be approved due order already it rejected.');
  }

  rejectPayment(): void {
    console.log(`Order already rejected.`);
  }

  waitPayment(): void {
    console.log('Order can not be pending due order already it rejected.');
  }

  shipOrder(): void {
    console.log('Order can not be shipped due order already it rejected.');
  }
}
