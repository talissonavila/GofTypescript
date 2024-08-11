import { BaseBudgetHandler } from './baseBudgetHandler';
import { CustomerBudget } from './customerBudget';

export class ManagerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log('manager treat the budget');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
