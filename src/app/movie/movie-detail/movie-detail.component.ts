import {Component, Input} from '@angular/core';
import {Movie} from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})

export class MovieDetailComponent {
  @Input() movie!: Movie;
}
