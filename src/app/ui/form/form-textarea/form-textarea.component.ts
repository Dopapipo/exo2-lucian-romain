import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form-textarea',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-textarea.component.html',
  styleUrl: './form-textarea.component.css'
})
export class FormTextareaComponent {
  @Input() inputPlaceholder!: string;
  @Input() inputFormControlName!: string;
  @Input() formControl!: FormControl;
}
