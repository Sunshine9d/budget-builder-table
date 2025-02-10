import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
} from '@angular/forms';
import { BudgetMonth } from '../shared/budget.model';

@Component({
    selector: 'app-budget-list',
    templateUrl: './budget-list.component.html',
    styleUrls: ['./budget-list.component.scss'],
    standalone: false,
})
export class BudgetListComponent implements OnInit, AfterViewInit {
    cateForm = new FormGroup({
        inputCate: new FormControl(''),
        // other form controls
    });
    year = '2024';
    budgetForm = new FormGroup({
        startDate: new FormControl(1),
        endDate: new FormControl(11),
        months: new FormArray([]),
        income: new FormArray([]),
        totalIncome: new FormControl([]),
        expenses: new FormArray([]),
        expensesIncome: new FormControl([]),
    });

    get totalIncome() {
        return this.budgetForm.get('totalIncome') as FormControl;
    }
    get inputCate() {
        return this.cateForm.get('inputCate') as FormControl;
    }

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

    BudgetMonth: { [k: number]: string } = BudgetMonth;
    monthOptions: Array<{ value: number; label: string }> = [];
    endDates: Array<{ value: number; label: string }> = [];

    constructor(private fb: FormBuilder, private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.monthOptions = this.generateMonthOptions();
        this.valueChanges();
        this.summarySubIncome();
        this.income.push(this.generateIncome('General Income'));

    }

    summarySubIncome(){
        this.income.valueChanges.subscribe((value: Array<{total: number[]}>) => {
            let totalIncome = this.generateTotal();
            value.forEach((v, i) => {
                v.total.forEach((v: number, i: number) => {
                    totalIncome[i] += +v | 0;
                });
            });
            this.totalIncome.setValue(totalIncome);

        })
    }

    generateTotal() {
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    // sub income
    private generateIncome(name: string) {
        const form = this.fb.group({
            category: [name],
            sub: this.fb.array([]),
            total: [this.generateTotal()],
        });
        const sub = form.controls['sub'] as FormArray;
        sub.valueChanges.subscribe((value) => {
            const total = form.controls['total'] as FormControl;
            const rs = this.setSubtotal(value, total.value);
            total.setValue(rs);
        });
        sub.push(this.addSubCategory(name.trim(), name));
        return form;
    }

    setSubtotal(sub: Array<{months: number[]}>, total: number[]){
        total = total.map(() => 0) as number[];
        sub.forEach((control) => {
            const subTotal = control.months;
            subTotal.forEach((v: number, i: number) => {
                total[i] += +v;
            });
        });
        return total;
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
        this.startDate.valueChanges.subscribe((value) => {
            this.endDates = this.getEndDateOptions();
            this.setArrangeMonths(value, this.endDate.value);
        });
        this.endDate.valueChanges.subscribe((value) => {
            this.setArrangeMonths(this.startDate.value, value);
        });
        // set default start and end of date
        this.budgetForm.patchValue({
            startDate: this.monthOptions[0].value,
            endDate: this.monthOptions[11].value,
        });
    }

    private setArrangeMonths(start: number, end: number) {
        if (!start || !end) return;
        this.months.clear();
        for (let i = start; i <= end; i++) {
            this.addMonth(i);
        }
    }

    private getEndDateOptions() {
        const startDate = this.startDate.value;
        if (!startDate) return [];
        return this.monthOptions.filter((month) => month.value > startDate);
    }

    saveBudget() {
        console.error('Budget saved:', this.budgetForm.value);
    }

    addSubCate1(form: AbstractControl<any>, label: string) {
        const sub = (form as FormGroup).controls['sub'] as FormArray;
        sub.push(this.addSubCategory(label, label));
        this.inputCate.reset('');
    }

    addParentCategory(_income: FormArray, name: string) {
        this.income.push(this.generateIncome(name));
        const firstMonthControl = this.el.nativeElement.querySelector('.input-value');
        if (firstMonthControl) {
            this.renderer.setAttribute(firstMonthControl, 'autofocus', 'true');
            firstMonthControl.focus();
        }
    }

    private addSubCategory(key: string, label: string) {
        const subGroup = this.fb.group({
            type: [label],
            months: this.fb.array([]),
            total: [0],
        });
        const total = subGroup.controls['total'] as FormControl;
        const months = subGroup.controls['months'] as FormArray;
        for (let i = 1; i <= 12; i++) {
            months.push(new FormControl(0));
            if(i === 1){
                console.log(months.controls[0]);
                // months[0].autofocus = true;
            }
        }
        total.setValue(0);
        return subGroup;
    }
    getSub(form: AbstractControl<any>) {
        return (form as FormGroup).get('sub') as FormArray;
    }

    getMonth(form: AbstractControl<any>) {
        return (form as FormGroup).get('months') as FormArray;
    }

    getMonthValue(form: AbstractControl<any>, month: number) {
        return form?.get(`${month - 1}`) as FormControl;
    }


    getSubTotal(total: number[], month: number) {
        return total[month - 1];
    }
    getTotalIncome(total: number[], month: number) {
        return total[month - 1];
    }

    ngAfterViewInit() {
        const firstMonthControl = this.el.nativeElement.querySelector('.input-value');
        if (firstMonthControl) {
            this.renderer.setAttribute(firstMonthControl, 'autofocus', 'true');
            firstMonthControl.focus();
        }
    }

}
