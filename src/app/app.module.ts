import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ImagecardComponent } from './components/imagecard/imagecard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertModule,CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ImagecardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    AlertModule.forRoot(),
    CollapseModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
