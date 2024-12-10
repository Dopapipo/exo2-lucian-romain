import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() link!: string;
  @Input() label!: string;
}
