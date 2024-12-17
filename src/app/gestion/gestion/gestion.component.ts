import { Component, OnInit } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-gestion',
  standalone: true,
  templateUrl: './gestion.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  lastFormData: any;

  ngOnInit() {
    const savedData = localStorage.getItem('lastFormData');
    this.lastFormData = savedData ? JSON.parse(savedData) : null;
  }
}
