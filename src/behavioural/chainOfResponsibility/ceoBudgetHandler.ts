import { BaseBudgetHandler } from './baseBudgetHandler';
import { CustomerBudget } from './customerBudget';

export class CEOBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('ceo treat the budget');
    budget.approved = true;
    return budget;
  }
}
