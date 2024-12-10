import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './form-checkbox.component.html',
  styleUrl: './form-checkbox.component.css'
})
export class FormCheckboxComponent {
  @Output() toggle = new EventEmitter<void>();

  handleCheckbox(event: any) {
    this.toggle.emit();
  }
}
