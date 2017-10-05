import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BordadoService} from '../services/bordado-service.service';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-bordados-user',
  templateUrl: './bordados-user.component.html',
  styleUrls: ['./bordados-user.component.css'],
  providers:[BordadoService]
})

export class BordadosUserComponent implements OnInit {
  userId
  authUserId :number
  bordado:any
  myImgUrl:string='/assets/unlike.png';

  constructor(private route: ActivatedRoute,
              private bordadoService: BordadoService,
              private _lightbox: Lightbox,
        ) {
               this.route.params.subscribe( params =>
                   this.userId = params.id );
      }

  ngOnInit() {
           this.bordadoService.getBordadoByUserId(this.userId)
                   .subscribe(bordado=>{
                       this.bordado=bordado
                       this.authUserId = bordado[0].auth_user;
                       bordado.forEach(bor=>{
                          bor.likes.forEach(like=>{
                            if(like.user_id == this.authUserId){
                               bor.liked = true
                      }
                  })
              })
        console.log(this.bordado)
           })
  }
   open(index: number): void {
    this._lightbox.open(this.bordado, index);
  }

  like(e,bordadoid){

    if(e.target.src=='http://localhost:4200/assets/like.png'){
        this.bordadoService.unlike(bordadoid,this.authUserId)
            .subscribe()

        e.target.src='http://localhost:4200/assets/unlike.png'
          }else{
        e.target.src='http://localhost:4200/assets/like.png'
        this.bordadoService.like(bordadoid,this.authUserId)
            .subscribe()
    }

  }
}
