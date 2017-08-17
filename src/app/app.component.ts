import { Component ,OnInit} from '@angular/core';
import {Http} from  '@angular/http';
import {ApiService} from './api.service'
import 'rxjs/Rx'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app works!';
constructor(private ser:ApiService){}
ngOnInit() {
        this.ser.prueba().subscribe()
    }
}
