import { Component, OnInit } from '@angular/core';
import {BordadoService} from '../services/bordado-service.service';
import { Lightbox } from 'angular2-lightbox';
import {MdButtonToggleModule} from '@angular/material';

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
              private _lightbox: Lightbox) {
    }

  ngOnInit() {
      this.bordadoService.getBordados()
            .subscribe(bordado=>{
                this.bordados = bordado
                this.authUserId = bordado[0].auth_user.id;
                bordado.forEach(bor=>{
                  bor.likes.forEach(like=>{
                    if(like.user_id == this.authUserId){
                        bor.liked = true
                      }
                  })
              })
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
