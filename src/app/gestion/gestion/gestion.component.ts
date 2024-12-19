import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-gestion',
  standalone: true,
  templateUrl: './gestion.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {
  @Input() formData: any | null = null; // Input to receive data from parent

  get lastFormData() {
    return this.formData; // Proxy for backward compatibility
  }
}
