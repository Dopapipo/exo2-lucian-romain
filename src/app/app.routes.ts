import { Routes } from '@angular/router';
import {MoviePageComponent} from "./movie-page/movie-page.component";
import {GestionPageComponent} from "./gestion-page/gestion-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomePageComponent },
  { path: 'liste', component: MoviePageComponent },
  { path: 'gestion', component: GestionPageComponent },
  { path: '**', redirectTo: '/accueil' }
];
