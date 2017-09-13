import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ImagecardComponent } from './components/imagecard/imagecard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { NavComponent } from './components/nav/nav.component';
import { routes,AppRoutingModule } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
=======
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertModule,CollapseModule } from 'ngx-bootstrap';
>>>>>>> 8e04e4d181c88600fec305bb4f910cd18e723feb

@NgModule({
  declarations: [
    AppComponent,
    ImagecardComponent,
<<<<<<< HEAD
    NavComponent,
    LoginComponent,
    RegisterComponent,
=======
    NavbarComponent,
>>>>>>> 8e04e4d181c88600fec305bb4f910cd18e723feb
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
      RouterModule.forRoot(
routes    ),
=======
    AlertModule.forRoot(),
    CollapseModule
>>>>>>> 8e04e4d181c88600fec305bb4f910cd18e723feb
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
