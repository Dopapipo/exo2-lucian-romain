import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [MovieService]
})
export class MovieListModule { }
