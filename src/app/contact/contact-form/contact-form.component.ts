import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormInputComponent} from "../../ui/form/form-input/form-input.component";
import {FormCheckboxComponent} from "../../ui/form/form-checkbox/form-checkbox.component";
import {NgIf} from "@angular/common";
import {FormTextareaComponent} from "../../ui/form/form-textarea/form-textarea.component";
import {ContactForm} from "./contact-form.model";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormInputComponent,
    ReactiveFormsModule,
    FormCheckboxComponent,
    NgIf,
    FormTextareaComponent
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


  submitForm() {
    if (this.contactForm.valid) {
      const formData: ContactForm = this.formValues;
      console.log('Form Data:', formData);
      alert('Form submitted successfully');
    } else {
      alert('Please fill out all required fields correctly');
    }
  }
}
