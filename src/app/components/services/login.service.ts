import { Injectable } from '@angular/core';
import { Http, Headers ,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private loginUrl= 'http://laravel.example.com/api/login';
  constructor(private http:Http) { }


 Login(email: string, password: string){
 	 var headers = new Headers();
 	let bs64 = btoa(email+':'+password);
    headers.append('Authorization','Basic '+bs64);
    let options = new RequestOptions({ headers: headers });


    return this.http.get(this.loginUrl,options)
                     .map(resp => resp.json() );
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
