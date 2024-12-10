import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {NavItemComponent} from "../nav-item/nav-item.component";
import {NavigationItem} from "../NavigationItem";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    NgForOf,
    NavItemComponent
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  @Input() navItems: NavigationItem[] = [];

}

