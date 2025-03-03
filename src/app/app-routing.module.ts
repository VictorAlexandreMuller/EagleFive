import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreinoComponent } from './treino/treino.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CriarTreinoComponent } from './criar-treino/criar-treino.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home-page', component: HomePageComponent },
  { path: 'treino', component: TreinoComponent },
  { path: 'criar-treino', component: CriarTreinoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
