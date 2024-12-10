import { Component } from '@angular/core';
import {PageComponent} from "../../ui/layout/page/page.component";

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [
    PageComponent
  ],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent {

}
