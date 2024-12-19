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
export class FormInputComponent  {
  @Input() inputPlaceholder!: string;
  @Input() type = 'text';
  @Input() inputFormControlName!: string;
  @Input() inputFormControl!: FormControl;

  constructor() {
  }
}
