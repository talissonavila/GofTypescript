import { BaseBudgetHandler } from './baseBudgetHandler';
import { CustomerBudget } from './customerBudget';

export class DirectorBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50000) {
      console.log('director treat the budget');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
