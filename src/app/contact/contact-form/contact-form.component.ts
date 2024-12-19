import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormInputComponent} from "../../ui/form/form-input/form-input.component";
import {FormCheckboxComponent} from "../../ui/form/form-checkbox/form-checkbox.component";
import {NgIf} from "@angular/common";
import {ContactForm} from "./contact-form.model";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormInputComponent,
    ReactiveFormsModule,
    FormCheckboxComponent,
    NgIf,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  hideEmail = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [1, [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required]
    });
  }

  get formValues(): ContactForm {
    return this.contactForm.value
  }

  toggleEmailVisibility() {
    this.hideEmail = !this.hideEmail;

    if (this.hideEmail) {
      this.contactForm.get('email')?.setValidators([Validators.email]);
    } else {
      this.contactForm.get('email')?.setValidators([Validators.required, Validators.email]);
    }
    this.contactForm.get('email')?.updateValueAndValidity();
  }

  getErrorMessages(controlName: string): string[] {
    const control = this.contactForm.get(controlName);
    const messages: string[] = [];

    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        messages.push(`${this.formatFieldName(controlName)} is required`);
      }

      if (!this.hideEmail && control.errors['email']) {
        messages.push('Please enter a valid email address');
      }

      if (control.errors['min']) {
        messages.push(`${this.formatFieldName(controlName)} must be at least ${control.errors['min'].min}`);
      }

      if (control.errors['max']) {
        messages.push(`${this.formatFieldName(controlName)} cannot be more than ${control.errors['max'].max}`);
      }

      if (control.errors['minlength']) {
        messages.push(`${this.formatFieldName(controlName)} must be at least ${control.errors['minlength'].requiredLength} characters`);
      }

      if (control.errors['maxlength']) {
        messages.push(`${this.formatFieldName(controlName)} cannot exceed ${control.errors['maxlength'].requiredLength} characters`);
      }
    }

    return messages;
  }

  submitForm() {
    console.log('Form:', this.contactForm);
    if (this.contactForm.valid) {
      const formData: ContactForm = this.formValues;
      console.log('Form Data:', formData);
      alert('Form submitted successfully');
    } else {
      alert('Please fill out all required fields correctly');
    }
  }
  private formatFieldName(name: string): string {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  }
}
