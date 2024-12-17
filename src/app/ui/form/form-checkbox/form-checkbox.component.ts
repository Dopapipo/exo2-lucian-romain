import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './form-checkbox.component.html',
  styleUrl: './form-checkbox.component.css',
})
export class FormCheckboxComponent {
  @Input() label: string = 'No email';
  @Output() toggle = new EventEmitter<void>();

  handleCheckbox(event: Event) {
    this.toggle.emit();
  }
}
