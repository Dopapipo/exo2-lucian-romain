import {Component, Input} from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {HeaderComponent} from "../../header/header.component";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

import {NavigationItem} from "../../navbar/NavigationItem";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  @Input() title?: string;
  @Input() headerNavigationItems: NavigationItem[]= DEFAULT_NAVIGATION_ITEMS;
}

const DEFAULT_NAVIGATION_ITEMS : NavigationItem[] = [
  {link: '/accueil', label: 'Accueil'},
  {link: '/liste', label: 'Films'},
  {link: '/gestion', label: 'Gestion'}
]
