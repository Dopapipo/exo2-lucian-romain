import {Routes} from '@angular/router';
import {MoviePageComponent} from "./movie/movie-page/movie-page.component";
import {GestionPageComponent} from "./gestion/gestion-page/gestion-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ContactPageComponent} from "./contact/contact-page/contact-page.component";

export const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: HomePageComponent},
  {path: 'liste', component: MoviePageComponent},
  {path: 'gestion', component: GestionPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'movie', component: MoviePageComponent},
  {path: '**', redirectTo: '/accueil'}
];
