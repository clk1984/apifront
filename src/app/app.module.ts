import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ImagecardComponent } from './components/imagecard/imagecard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { routes,AppRoutingModule } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagecardComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
      RouterModule.forRoot(
routes    ),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
