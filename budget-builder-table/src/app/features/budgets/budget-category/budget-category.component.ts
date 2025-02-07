import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'tbody[app-budget-category]',
    templateUrl: './budget-category.component.html',
    styleUrl: './budget-category.component.scss',
    standalone: false,
})
export class BudgetCategoryComponent implements OnInit {
    @Input() months: FormArray = new FormArray<any>([]);
    @Input() month!: AbstractControl;
    @Input() isNotIncome: boolean = false;
    categoryForm = new FormGroup({
        key: new FormControl(''),
        sub: new FormArray([]),
    });

    get sub() {
        return this.categoryForm.get('sub') as FormArray;
    }

    ngOnInit() {
        this.addSubCategory('generalIncome', 'General Income');
        this.addSubCategory('sale', 'Sales');
        this.addSubCategory('Commission', 'Commissions');
        const month = this.month as FormGroup;
        (
            ((month.controls['sub'] as FormArray).at(+this.isNotIncome) as FormGroup)
                .controls['sub'] as FormArray
        ).push(this.generateCategoryForm('generalIncome'));
    }

    constructor(private fb: FormBuilder) {}

    addCategory(name: string) {
        // generalIncome
        const categoryGroup = this.fb.group({
            type: [name],
            sub: this.fb.array([]),
            total: [0],
        });
        this.sub.push(categoryGroup);
    }

    private generateCategoryForm(key: string) {
        const form = new FormGroup({
            key: new FormControl(key),
            sub: new FormArray([]),
            total: new FormControl(0),
        });
        const sub = form.get('sub') as FormArray;
        sub.push(this.addSubCategory('generalIncome', 'General Income'));
        sub.push(this.addSubCategory('sale', 'Sales'));
        sub.push(this.addSubCategory('Commission', 'Commissions'));
        return form;
    }

    addSubCategory(key: string, name: string) {
        return this.fb.group({
            key: [key],
            label: [name],
            value: [0],
        });
    }

    removeCategory(index: number) {
        this.sub.removeAt(index);
    }
}
