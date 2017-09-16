import { Injectable } from '@angular/core'
import {Http} from '@angular/http'

@Injectable()
export class BordadoService{

  constructor(private http:Http) { }

 private bordadosUrl = 'http://laravel.example.com/api/bordados'

 getBordados(){
    return this.http.get(this.bordadosUrl)
                .map(response=>{
                    return response.json()
                })
}
createBordado(data){
	console.log(data)
	return this.http.post(this.bordadosUrl,data)
		    .map(response=>{
		    	return response.json()
		    })
}

}
