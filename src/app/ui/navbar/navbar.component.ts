import {Component, Input} from '@angular/core';
import {ItemListComponent} from "./item-list/item-list.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NavigationItem} from "./NavigationItem";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ItemListComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() items: NavigationItem[] = [];
}
