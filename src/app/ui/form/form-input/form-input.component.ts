import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FormInputComponent
    }]
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() inputPlaceholder!: string;
  @Input() type: "text"|"email"|"number" = 'text';
  @Input() maxLength?: number= 255;
  @Input() inputType:'input'|'textarea' = 'input';
  @Input() errorMessages?: string[];

  value: string = '';
  touched: boolean = false;
  disabled: boolean = false;

  constructor() {
  }

  onChange = (value: string) => {
  };

  onTouched = () => {
  };

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.markAsTouched();
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
