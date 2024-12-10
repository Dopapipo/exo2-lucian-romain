import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}
}
