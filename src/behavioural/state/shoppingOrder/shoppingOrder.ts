import { OrderPending } from './orderPending';
import { ShoppingOrderState } from './shoppingOrderState';

export class ShoppingOrder {
  private state: ShoppingOrderState = new OrderPending(this);

  getState(): ShoppingOrderState {
    return this.state;
  }

  setState(state: ShoppingOrderState): void {
    this.state = state;
    console.log(`order state now is ${this.getStateName()}`);
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvePayment(): void {
    this.state.approvePayment();
  }

  rejetctPayment(): void {
    this.state.rejectPayment();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }
  shipOrder(): void {
    this.state.shipOrder();
  }
}
