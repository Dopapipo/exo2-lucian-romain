import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  poster: string;
  description: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      poster: 'assets/movies/inception.jpg',
      description: 'A mind-bending thriller about dream infiltration and reality manipulation.',
      year: 2010
    },
    {
      id: 2,
      title: 'The Matrix',
      poster: 'assets/movies/matrix.jpg',
      description: 'A sci-fi classic exploring the nature of reality and human existence.',
      year: 1999
    },
    {
      id: 3,
      title: 'Interstellar',
      poster: 'assets/movies/interstellar.jpg',
      description: 'An epic space journey exploring love, time, and human survival.',
      year: 2014
    },
    {
      id: 4,
      title: 'Star Wars: A New Hope',
      poster: 'assets/movies/starwars.jpg',
      description: 'The legendary space opera that started a global phenomenon.',
      year: 1977
    },
    {
      id: 5,
      title: 'The Dark Knight',
      poster: 'assets/movies/darkknight.jpg',
      description: 'A gritty superhero film exploring the battle between order and chaos.',
      year: 2008
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}
