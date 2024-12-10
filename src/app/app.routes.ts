import { Routes } from '@angular/router';
import {MoviePageComponent} from "./movie-page/movie-page.component";
import {GestionPageComponent} from "./gestion-page/gestion-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomePageComponent },
  { path: 'liste', component: MoviePageComponent },
  { path: 'gestion', component: GestionPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '/accueil' }
];
