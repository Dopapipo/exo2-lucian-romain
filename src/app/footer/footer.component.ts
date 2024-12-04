import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="fixed-bottom bg-light p-3 gx-2 text-end">
      <button class="btn btn-primary" (click)="goToContact()">Contact</button>
    </footer>
  `
})
export class FooterComponent {
  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
