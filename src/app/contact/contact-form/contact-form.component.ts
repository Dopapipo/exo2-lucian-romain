import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormInputComponent} from "../../ui/form/form-input/form-input.component";
import {FormCheckboxComponent} from "../../ui/form/form-checkbox/form-checkbox.component";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

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
  hideEmail: boolean = false;
  submissionMessage: string | null = null;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required]
    });
  }

  toggleEmailVisibility() {
    if (!this.isSubmitted) {
      this.hideEmail = !this.hideEmail;

      if (this.hideEmail) {

        this.contactForm.get('email')?.disable();
        this.contactForm.get('email')?.clearValidators();
      } else {

        this.contactForm.get('email')?.enable();
        this.contactForm.get('email')?.setValidators([Validators.required, Validators.email]);
      }
      this.contactForm.get('email')?.updateValueAndValidity();
    }
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
    if (this.contactForm.valid) {
      sessionStorage.setItem('lastFormData', JSON.stringify(this.contactForm.value));
      this.contactForm.disable();
      this.submissionMessage = 'Your form is submitted. You can see your data on the Gestion Page.';
      this.isSubmitted = true;

    }
  }

  goToGestionPage() {
    this.router.navigate(['/gestion']).then(success => {
      if (success) {
        console.log('Navigation to Gestion Page was successful!');
      } else {
        console.error('Navigation to Gestion Page failed.');
      }
    });
  }

  resetForm() {
    this.contactForm.reset();
    this.contactForm.enable();
    this.submissionMessage = null;
    this.hideEmail = false;
    this.isSubmitted = false;
  }

  private formatFieldName(name: string): string {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  }
}
