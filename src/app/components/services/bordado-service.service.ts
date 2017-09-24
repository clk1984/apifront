import { Injectable } from '@angular/core'
import {Http,RequestOptions,Headers} from '@angular/http'

@Injectable()
export class BordadoService{
 private bordadosUrl = 'http://laravel.example.com/api/bordados'
private options:RequestOptions

 constructor(private http:Http) { }

createAuthorizationHeader(headers: Headers) {
   let token:string = window.localStorage.getItem('token');
   headers.append( 'Accept', 'application/json' );
   headers.append('Authorization', 'Bearer '+ token);
   this.options = new RequestOptions({ headers: headers });
  }

 getBordados(){
   let headers = new Headers();
   this.createAuthorizationHeader(headers)
   return this.http.get(this.bordadosUrl,this.options)
                .map(response=>{
                    return response.json()
                })
}

createBordado(data){
	return this.http.post(this.bordadosUrl,data)
		    .map(response=>{
		    	return response.json()
		    })
}

like(bordadoid,userId){
    return this.http.post(this.bordadosUrl+'/'+bordadoid+'/like',{'userId': userId})
                .share()
                .map(response=>{
                    return response.json()
                })
}

unlike(bordadoid,userId){
 return this.http.post(this.bordadosUrl+'/'+bordadoid+'/unlike',{'userId': userId})
                .share()
                .map(response=>{
                    return response.json()
                })
        }
}