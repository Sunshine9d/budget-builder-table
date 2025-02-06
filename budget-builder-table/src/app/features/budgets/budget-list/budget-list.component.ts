import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-budget-list',
    templateUrl: './budget-list.component.html',
    styleUrls: ['./budget-list.component.scss'],
    standalone: false,
})
export class BudgetListComponent implements OnInit {
    budgetForm = new FormGroup({
        startDate: new FormControl(1),
        endDate: new FormControl(11),
    });

    monthOptions = [
        { value: 1, label: 'January' },
        { value: 2, label: 'February' },
        { value: 3, label: 'March' },
        { value: 4, label: 'April' },
        { value: 5, label: 'May' },
        { value: 6, label: 'June' },
        { value: 7, label: 'July' },
        { value: 8, label: 'August' },
        { value: 9, label: 'September' },
        { value: 10, label: 'October' },
        { value: 11, label: 'November' },
        { value: 12, label: 'December' },
    ];
    endDates: Array<{ value: number; label: string }> = [];
    constructor() {}
    ngOnInit() {
        this.valueChanges();
    }

    private valueChanges() {
        this.budgetForm.patchValue({
            startDate: this.monthOptions[0].value,
            endDate: this.monthOptions[11].value,
        });
        this.endDates = this.getEndDateOptions();
        this.budgetForm.controls['startDate'].valueChanges.subscribe(
            (value) => {
                if(!value) return;
                this.endDates = this.getEndDateOptions();
            },
        );
    }

    private  getEndDateOptions() {
      const startDate = this.budgetForm.value.startDate;
      if(!startDate) return [];
      return this.monthOptions.filter(
            (month) => month.value > startDate,
        );

    }
    saveBudget() {
        console.log('Budget saved:', this.budgetForm.value);
    }
}
