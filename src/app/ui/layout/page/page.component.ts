import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  @Input() title?: string;
  @Input() breadcrumbs?: { label: string; link: string }[];
}
