import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'treino',
    loadComponent: () => import('./treino/treino/treino.component').then(m => m.TreinoComponent)
  },
  {
    path: '',
    redirectTo: 'treino',
    pathMatch: 'full'
  }
];
