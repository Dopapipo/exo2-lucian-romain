import {Injectable} from '@angular/core';

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
            poster: '/assets/movies/inception.jpg',
            description: 'Un thriller visionnaire qui plonge dans les méandres de l\'esprit humain, où les rêves deviennent un terrain de manipulation complexe et dangereuse.',
            year: 2010
        },
        {
            id: 2,
            title: 'The Matrix',
            poster: 'assets/movies/matrix.jpg',
            description: 'Un chef-d\'œuvre de science-fiction qui remet en question la nature de la réalité, suivant un pirate informatique découvrant que le monde n\'est qu\'une illusion sophistiquée.',
            year: 1999
        },
        {
            id: 3,
            title: 'Interstellar',
            poster: 'assets/movies/interstellar.jpg',
            description: 'Une odyssée spatiale époustouflante qui explore l\'amour, le temps et la survie de l\'humanité face à une Terre mourante, mêlant science et émotion.',
            year: 2014
        },
        {
            id: 4,
            title: 'Star Wars: A New Hope',
            poster: 'assets/movies/starwars.jpg',
            description: 'Le film qui a lancé une saga légendaire, racontant l\'histoire héroïque d\'un jeune fermier devenant le héros qui va défier un empire galactique oppresseur.',
            year: 1977
        },
        {
            id: 5,
            title: 'The Dark Knight',
            poster: 'assets/movies/darkknight.jpg',
            description: 'Un film de super-héros sombre et profond qui explore les frontières morales entre le bien et le mal, à travers le combat de Batman contre le Joker, l\'incarnation du chaos.',
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
