import { OrderApproved } from './orderApproved';
import { OrderRejected } from './orderRejected';
import { ShoppingOrder } from './shoppingOrder';
import { ShoppingOrderState } from './shoppingOrderState';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    console.log(`Order already pending.`);
  }

  shipOrder(): void {
    console.log('Can not ship order due order is pending.');
  }
}
