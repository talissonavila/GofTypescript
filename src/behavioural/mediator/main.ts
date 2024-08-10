import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();

seller1.addProduct({ id: '1', name: 'mug', price: 10.22 });
seller1.addProduct({ id: '2', name: 'pen', price: 1 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'car', price: 15000.99 });
seller2.addProduct({ id: '4', name: 'shirt', price: 12.46 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');

buyer.viewProducts();
