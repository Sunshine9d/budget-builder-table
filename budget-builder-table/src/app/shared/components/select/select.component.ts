import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  standalone: false,
})
export class SelectionComponent {
  @Input() label: string = '';
  @Input() options: { value: string | number, label: string }[] = [];
  @Input() control: FormControl = new FormControl();
}
