import { Component, OnInit } from '@angular/core';
import {BordadoService} from '../services/bordado-service.service';
import { Lightbox } from 'angular2-lightbox';
import {MdButtonToggleModule} from '@angular/material';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.css'],
  providers:[BordadoService]
})
export class ImagecardComponent implements OnInit {

  private authUserId:number
  private bordados = [];
  myImgUrl:string='/assets/unlike.png';

  constructor(private bordadoService:BordadoService,
              private _lightbox: Lightbox,
              private _router: Router,
              private route: ActivatedRoute,) {
    }

  ngOnInit() {
      this.bordadoService.getBordados()
            .subscribe(bordado=>{
                this.bordados = bordado
                console.log(bordado[0])
                this.authUserId = bordado[0].auth_user;
                bordado.forEach(bor=>{
                  bor.likes.forEach(like=>{
                    if(like.user_id == this.authUserId){
                        bor.liked = true
                      }
                  })
              })
           },
           error=>{

           })
          }

   open(index: number): void {
    this._lightbox.open(this.bordados, index);
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
