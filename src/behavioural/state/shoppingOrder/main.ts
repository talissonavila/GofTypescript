import { ShoppingOrder } from './shoppingOrder';

const order = new ShoppingOrder();
order.approvePayment();
order.waitPayment();
order.shipOrder();
order.rejetctPayment();
order.approvePayment();
order.shipOrder();
