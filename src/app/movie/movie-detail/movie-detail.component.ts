import { Component, Input } from '@angular/core';
import { Movie } from '../movie.service';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})

export class MovieDetailComponent {
  @Input() movie!: Movie;
}
