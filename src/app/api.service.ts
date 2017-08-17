import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http:Http) { }


prueba(){
	return this.http.get('http://laravel.example.com/api/articles')
		.map(response=>console.log(response))
}
}
