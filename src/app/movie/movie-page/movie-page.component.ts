import { Component } from '@angular/core';
import {PageComponent} from "../../ui/layout/page/page.component";
import {MovieListModule} from "../movie-list.module";

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [
    PageComponent,
    MovieListModule
  ],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent {

}
