import { BaseBudgetHandler } from './baseBudgetHandler';
import { CustomerBudget } from './customerBudget';

export class SellerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('seller treat the budget');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
