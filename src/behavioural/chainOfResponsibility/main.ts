import { CEOBudgetHandler } from './ceoBudgetHandler';
import { CustomerBudget } from './customerBudget';
import { DirectorBudgetHandler } from './directorBudgetHandler';
import { ManagerBudgetHandler } from './managerBudgetHandler';
import { SellerBudgetHandler } from './sellerBudgetHanlder';

const customerBudget = new CustomerBudget(10);
const customerBudget2 = new CustomerBudget(1001);
const customerBudget3 = new CustomerBudget(10000);
const customerBudget4 = new CustomerBudget(1000000);
const customerBudget5 = new CustomerBudget(9999999);
const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());
seller.handle(customerBudget);
seller.handle(customerBudget2);
seller.handle(customerBudget3);
seller.handle(customerBudget4);
seller.handle(customerBudget5);
