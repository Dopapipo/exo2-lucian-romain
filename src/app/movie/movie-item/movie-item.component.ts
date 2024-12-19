import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from '../movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  @Output() select = new EventEmitter<Movie>();

  selectMovie() {
    this.select.emit(this.movie);
  }
}
