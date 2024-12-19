import {Component, Input} from '@angular/core';
import {ItemListComponent} from "./item-list/item-list.component";
import {NavigationItem} from "./NavigationItem";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ItemListComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() items: NavigationItem[] = [];
}
