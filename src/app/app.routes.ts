import { Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tab1',
    loadComponent: () => import('./tab1/tab1.page').then( m => m.Tab1Page)
  },
];
