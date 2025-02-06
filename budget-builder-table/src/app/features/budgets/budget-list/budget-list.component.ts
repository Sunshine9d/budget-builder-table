import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
  standalone: false,
})
export class BudgetListComponent {
  budgetForm = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl(''),
  })
  budgets = [
    { id: 1, name: 'Marketing Budget', amount: 5000 },
    { id: 2, name: 'IT Budget', amount: 10000 },
    { id: 3, name: 'Operations Budget', amount: 7500 }
  ];

  saveBudget(){
    console.log('Budget saved:', this.budgetForm.value);
  }
}
