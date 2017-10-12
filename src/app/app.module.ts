import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { LightboxModule } from 'angular2-lightbox';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ImagecardComponent } from './components/imagecard/imagecard.component';
import {MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth/auth.module'
import { NavComponent } from './components/nav/nav.component';
import { routes,AppRoutingModule } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertModule,CollapseModule } from 'ngx-bootstrap';
import { CreateBordadoComponent } from './components/create-bordado/create-bordado.component';
import { BordadosLikedComponent } from './components/bordados-liked/bordados-liked.component';
import { BordadosUserComponent } from './components/bordados-user/bordados-user.component';
import { AuthHttp } from 'angular2-jwt';
import {AuthGuard} from './auth/auth/auth-guard.service';
import {AuthService} from './auth/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ImagecardComponent,
    FileSelectDirective,
    NavComponent,
    LoginComponent,
    RegisterComponent,

    NavbarComponent,

    CreateBordadoComponent,

    BordadosLikedComponent,


    BordadosUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
     LightboxModule,
    RouterModule.forRoot(
      routes    ),
    AlertModule.forRoot(),
    CollapseModule,
    MdInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    AuthModule

    ],

  bootstrap: [AppComponent],
  providers:[AuthGuard,AuthService]
})
export class AppModule { }
