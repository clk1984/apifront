import { Injectable } from '@angular/core'
import {Http,RequestOptions,Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable';


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
               .catch(this.handleError);

}

createBordado(data){
    let headers = new Headers();
    this.createAuthorizationHeader(headers)
	return this.http.post(this.bordadosUrl,data,this.options)
		    .map(response=>{
		    	return response.json()
		    })
}

like(bordadoid,userId){
    console.log(userId)
   let headers = new Headers();
   this.createAuthorizationHeader(headers)
   return this.http.post(this.bordadosUrl+'/'+bordadoid+'/like',{'userId': userId},this.options)
                .share()
                .map(response=>{
                    return response.json()
                })
}

unlike(bordadoid,userId){
 let headers = new Headers();
 this.createAuthorizationHeader(headers)
 return this.http.post(this.bordadosUrl+'/'+bordadoid+'/unlike',{'userId': userId},this.options)
                .share()
                .map(response=>{
                    return response.json()
                })
        }

handleError(error:any) {
          let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console instead
            return Observable.of(error);


    }
}