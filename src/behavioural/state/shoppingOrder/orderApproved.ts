import { OrderPending } from './orderPending';
import { OrderRejected } from './orderRejected';
import { ShoppingOrder } from './shoppingOrder';
import { ShoppingOrderState } from './shoppingOrderState';

export class OrderApproved implements ShoppingOrderState {
  private name = 'OrderApproved';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log(`Order already approved.`);
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }

  shipOrder(): void {
    console.log('shipping order to customer');
  }
}
