import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    standalone: false,
})
export class InputComponent {
    @Input() label!: string;
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    @Input() control!: FormControl;
}
