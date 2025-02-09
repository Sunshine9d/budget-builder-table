import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    standalone: false,
})
export class InputComponent {
    @Output() enter = new EventEmitter<string>();


    @Input() label!: string;
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    @Input() control!: FormControl;

    emitData(evt: any) {
        this.enter.emit(evt.target.value);
    }
}
