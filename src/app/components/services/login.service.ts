import { Injectable } from '@angular/core';
import { Http, Headers ,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private loginUrl= 'http://laravel.example.com/api/login';
  private registerUrl= 'http://laravel.example.com/api/register';
  constructor(private http:Http) { }


 Login(data){
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
      return this.http.post(this.loginUrl,data,options)
                     .map(resp => resp.json() );
 }
 register(data){
     let headers = new Headers({ 'Accept': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return this.http.post(this.registerUrl,data,options)
                     .map(resp=>resp.json())
                     .share()
                      }

 get(url:string, hdrs?:Object) {
		let headers = new Headers();
		if( hdrs )
			for(var h in hdrs) headers.append(h, hdrs[h]);
		let user:any = window.localStorage.get('user');
		if( user && user.token  )
			headers.append('Authorization', 'Basic '+user.token);
		return this.http.get(url, {
			headers: headers
		});
	}
}
