import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsComponent } from './budgets.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BudgetCategoryComponent } from './budget-category/budget-category.component';

@NgModule({
    declarations: [BudgetsComponent, BudgetListComponent, BudgetCategoryComponent],
    imports: [CommonModule, SharedModule, BudgetsRoutingModule],
})
export class BudgetsModule {}
