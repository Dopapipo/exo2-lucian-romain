import {Component, OnInit} from '@angular/core';
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
export class GestionPageComponent implements OnInit {
  lastFormData: any = null;

  ngOnInit() {
    const data = sessionStorage.getItem('lastFormData');
    if (data) {
      this.lastFormData = JSON.parse(data);
    }
  }
}
