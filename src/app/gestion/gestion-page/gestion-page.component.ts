import {Component, Input} from '@angular/core';
import {PageComponent} from "../../ui/layout/page/page.component";
import {GestionComponent} from "../gestion/gestion.component";

@Component({
  selector: 'app-gestion-page',
  standalone: true,
  imports: [
    PageComponent,
    GestionComponent
  ],
  templateUrl: './gestion-page.component.html',
  styleUrl: './gestion-page.component.css'
})
export class GestionPageComponent {
  lastFormData: any | null = null;

  // Simulate form submission or receive real data here
  updateFormData(newData: any) {
    this.lastFormData = newData;
  }
}
