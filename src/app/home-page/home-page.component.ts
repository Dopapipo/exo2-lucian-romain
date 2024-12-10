import { Component } from '@angular/core';
import {PageComponent} from "../ui/layout/page/page.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    PageComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
