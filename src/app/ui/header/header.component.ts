import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";
import {NavItemComponent} from "../navbar/nav-item/nav-item.component";
import {ItemListComponent} from "../navbar/item-list/item-list.component";
import {NavigationItem} from "../navbar/NavigationItem";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NavbarComponent,
    NavItemComponent,
    ItemListComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() navigationItems: NavigationItem[] = [];
}
