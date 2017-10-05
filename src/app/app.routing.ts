import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
//components
import {ImagecardComponent} from './components/imagecard/imagecard.component'
import {RegisterComponent} from './components/register/register.component'
import {CreateBordadoComponent} from './components/create-bordado/create-bordado.component'
import{BordadosLikedComponent} from './components/bordados-liked/bordados-liked.component'
import{BordadosUserComponent} from './components/bordados-user/bordados-user.component'

export const routes:Routes = [
  { path: 'cards', component: ImagecardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateBordadoComponent },
  { path: 'liked', component: BordadosLikedComponent },
  { path: 'bordados/:id', component: BordadosUserComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
