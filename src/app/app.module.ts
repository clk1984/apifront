import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ImagecardComponent } from './components/imagecard/imagecard.component';

import { NavComponent } from './components/nav/nav.component';
import { routes,AppRoutingModule } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertModule,CollapseModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ImagecardComponent,

    NavComponent,
    LoginComponent,
    RegisterComponent,

    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
      RouterModule.forRoot(
routes    ),
    AlertModule.forRoot(),
    CollapseModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
