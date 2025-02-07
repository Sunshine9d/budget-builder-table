import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BudgetMonth } from '../shared/budget.model';

@Component({
    selector: 'app-budget-list',
    templateUrl: './budget-list.component.html',
    styleUrls: ['./budget-list.component.scss'],
    standalone: false,
})
export class BudgetListComponent implements OnInit {
    year =  '2024';
    budgetForm = new FormGroup({
        startDate: new FormControl(1),
        endDate: new FormControl(11),
        months: new FormArray([]),
        income: new FormArray([]),
        expenses: new FormArray([]),
        profitOrLoss: new FormControl(0),
        openingBalance: new FormControl(0),
        closingBalance: new FormControl(0),
    });

    get months() {
        return this.budgetForm.get('months') as FormArray;
    }

    get income() {
        return this.budgetForm.get('income') as FormArray;
    }

    get expenses() {
        return this.budgetForm.get('expenses') as FormArray;
    }

    get startDate() {
        return this.budgetForm.get('startDate') as FormControl;
    }

    get endDate() {
        return this.budgetForm.get('endDate') as FormControl;
    }

    budgetObj = {
        months: [
            {
                month: 'January',
                sub: [
                    {
                        type: 'Income',
                        sub: [
                            {
                                key: 'generalIncome',
                                sub: [
                                    {
                                        key: 'generalIncome',
                                        label: 'General Income',
                                        value: 100,
                                    },
                                    {
                                        key: 'sales',
                                        label: 'Sales',
                                        value: 200,
                                    },
                                    {
                                        key: 'commission',
                                        label: 'Commission',
                                        value: 0,
                                    },
                                ],
                                total: 300,
                            },
                            {
                                key: 'otherIncome',
                                sub: [
                                    {
                                        key: 'otherIncome',
                                        label: 'Other Income',
                                        value: null,
                                    },
                                    {
                                        key: 'training',
                                        label: 'Training',
                                        value: 500,
                                    },
                                    {
                                        key: 'consulting',
                                        label: 'Consulting',
                                        value: 500,
                                    },
                                ],
                                total: 1000,
                            },
                        ],
                        total: 1300,
                    },
                    {
                        type: 'Expenses',
                        sub: [
                            {
                                key: 'operationalExpenses',
                                sub: [
                                    {
                                        key: 'operationalExpenses',
                                        label: 'Operational Expenses',
                                        value: 50,
                                    },
                                    {
                                        key: 'Management Fees',
                                        label: 'Management Fees',
                                        value: 100,
                                    },
                                    {
                                        key: 'Cloud Hosting',
                                        label: 'Cloud Hosting',
                                        value: 200,
                                    },
                                ],
                                total: 300,
                            },
                            {
                                key: 'salaries&Wages',
                                sub: [
                                    {
                                        key: 'salaries&Wages',
                                        label: 'Salaries & Wages',
                                        value: null,
                                    },
                                    {
                                        key: 'Full Time Dev Salaries',
                                        label: 'Full Time Dev Salaries',
                                        value: 100,
                                    },
                                    {
                                        key: 'Part Time Dev Salaries',
                                        label: 'Part Time Dev Salaries',
                                        value: 80,
                                    },
                                    {
                                        key: 'Remote Salaries',
                                        label: 'Remote Salaries',
                                        value: 20,
                                    },
                                ],
                                total: 200,
                            },
                        ],
                        total: 500,
                    },
                ],
            },
            {
                month: 'February',
                sub: [
                    {
                        type: 'Income',
                        sub: [
                            {
                                key: 'generalIncome',
                                sub: [
                                    {
                                        key: 'generalIncome',
                                        label: 'General Income',
                                        value: 100,
                                    },
                                    {
                                        key: 'sales',
                                        label: 'Sales',
                                        value: 200,
                                    },
                                    {
                                        key: 'commission',
                                        label: 'Commission',
                                        value: 0,
                                    },
                                ],
                                total: 300,
                            },
                            {
                                key: 'otherIncome',
                                sub: [
                                    {
                                        key: 'otherIncome',
                                        label: 'Other Income',
                                        value: null,
                                    },
                                    {
                                        key: 'training',
                                        label: 'Training',
                                        value: 500,
                                    },
                                    {
                                        key: 'consulting',
                                        label: 'Consulting',
                                        value: 500,
                                    },
                                ],
                                total: 1000,
                            },
                        ],
                        total: 1300,
                    },
                    {
                        type: 'Expenses',
                        sub: [
                            {
                                key: 'operationalExpenses',
                                sub: [
                                    {
                                        key: 'operationalExpenses',
                                        label: 'Operational Expenses',
                                        value: 50,
                                    },
                                    {
                                        key: 'Management Fees',
                                        label: 'Management Fees',
                                        value: 100,
                                    },
                                    {
                                        key: 'Cloud Hosting',
                                        label: 'Cloud Hosting',
                                        value: 200,
                                    },
                                ],
                                total: 300,
                            },
                            {
                                key: 'salaries&Wages',
                                sub: [
                                    {
                                        key: 'salaries&Wages',
                                        label: 'Salaries & Wages',
                                        value: null,
                                    },
                                    {
                                        key: 'Full Time Dev Salaries',
                                        label: 'Full Time Dev Salaries',
                                        value: 100,
                                    },
                                    {
                                        key: 'Part Time Dev Salaries',
                                        label: 'Part Time Dev Salaries',
                                        value: 80,
                                    },
                                    {
                                        key: 'Remote Salaries',
                                        label: 'Remote Salaries',
                                        value: 20,
                                    },
                                ],
                                total: 200,
                            },
                        ],
                        total: 500,
                    },
                ],
            },
        ],
        profitOrLoss: 0,
        openingBalance: 0,
        closingBalance: 0,
    };

    BudgetMonth: { [k: number]: string } = BudgetMonth;
    monthOptions: Array<{ value: number; label: string }> = [];
    endDates: Array<{ value: number; label: string }> = [];

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.monthOptions = this.generateMonthOptions();
        this.valueChanges();
        this.income.push(this.generateIncome("GeneralIncome"));
        console.log(this.income);
    }

    private generateIncome(name: string){
        const form = this.fb.group({
            category: [name],
            sub: this.fb.array([]),
            total: [0],
        });
        const sub = form.controls['sub'] as FormArray;
        sub.push(this.addSubCategory('General Income', 'General Income'));
        sub.push(this.addSubCategory('Sales', 'Sales'));
        sub.push(this.addSubCategory('Commissions', 'Commissions'));
        return form;

    }

    private generateMonthOptions() {
        const options = [];
        for (const [key, value] of Object.entries(this.BudgetMonth)) {
            options.push({ value: +key, label: value });
        }
        return options;
    }

    addMonth(name: number) {
        const monthGroup = this.fb.group({
            month: [name],
            sub: this.fb.array([]),
        });
        (this.budgetForm.get('months') as FormArray).push(monthGroup);
        return monthGroup;
    }

    private valueChanges() {
        // this.endDates = this.getEndDateOptions();
        this.startDate.valueChanges.subscribe((value) => {
            this.endDates = this.getEndDateOptions();
            this.months.clear();
            if (!value) return;
            for (let i = value; i <= this.endDate.value; i++) {
                this.addMonth(i);
                this.addSubItem(i, 'Income');
                this.addSubItem(i, 'Expenses');
            }
        });
        this.endDate.valueChanges.subscribe((value) => {
            this.months.clear();
            if (!value) return;
            for (let i = this.startDate.value; i <= value; i++) {
                this.addMonth(i);
                this.addSubItem(i, 'Income');
                this.addSubItem(i, 'Expenses');
            }
        });
        this.budgetForm.patchValue({
            startDate: this.monthOptions[0].value,
            endDate: this.monthOptions[11].value,
        });
    }

    private getEndDateOptions() {
        const startDate = this.startDate.value;
        if (!startDate) return [];
        return this.monthOptions.filter((month) => month.value > startDate);
    }

    saveBudget() {
        console.log('Budget saved:', this.budgetForm.value);
    }

    addSubItem(month = 1, name = 'Income') {
        const _month = month - this.startDate.value ;
        const subItemGroup = this.fb.group({
            type: [name],
            sub: this.fb.array([]),
            total: [0],
        });
        this.getSubItems(_month).push(subItemGroup);
    }

    getSubItems(month = 1) {
        return (this.months.at(month) as FormGroup).controls[
            'sub'
        ] as FormArray;
    }

    addSubCate1(form: AbstractControl<any>, label: string){
        console.log(form, label);
        const sub = (form as FormGroup).controls['sub'] as FormArray;
        sub.push(this.addSubCategory(label, label));

    }

    addParentCategory(form: AbstractControl<any>, name: string) {
        const categoryGroup = this.fb.group({
            category: [name],
            sub: this.fb.array([]),
            total: [0],
        });
        const sub = categoryGroup.controls['sub'] as FormArray;
        let monthGroup = this.fb.group({
            type: [name],
            months: this.fb.array([]),
            total: [0],
        });
        let months = monthGroup.controls['months'] as FormArray;
        for (let i = 1; i <= 12; i++) {
            months.push(new FormControl(10));
        }
        sub.push(monthGroup);
        (form as FormArray).push(categoryGroup);
    }

    private addSubCategory(key: string, label: string) {
        const subGroup = this.fb.group({
            type: [label],
            months: this.fb.array([]),
            total: [0],
        });
        const total = subGroup.controls['total'] as FormControl;
        const months = subGroup.controls['months'] as FormArray;
        let sum = 0;
        for (let i = 1; i <= 12; i++) {
            months.push(new FormControl(10));
            sum += 10;
        }
        total.setValue(sum);
        return subGroup;
    }
    getSub(form: AbstractControl<any>){
        return (form as FormGroup).get('sub') as FormArray;
    }

    getMonth(form: AbstractControl<any>){
        return (form as FormGroup).get('months') as FormArray;
    }
}
