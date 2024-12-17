import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
  @Input() placeholder!: string;
  @Input() type = 'text';
  @Input() formControlName!: string;
  @Input() formControl!: FormControl;

  constructor() {
  }
}
