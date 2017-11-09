import { Component, OnInit } from '@angular/core';
import {BordadoService} from '../services/bordado-service.service';
import { Lightbox } from 'angular2-lightbox';
import {MatButtonToggleModule} from '@angular/material';
import { Router, ActivatedRoute} from '@angular/router';
import { AppSettings} from '../../globals/appSettings';

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
  url = AppSettings.FRONT_ENDPOINT 
  imageUrl = AppSettings.BACK_ENDPOINT
  constructor(private bordadoService:BordadoService,
              private _lightbox: Lightbox,
              private _router: Router,
              private route: ActivatedRoute,) {
    }

  ngOnInit() {
      this.bordadoService.getBordados()
            .subscribe(bordado=>{
              console.log(bordado)
                this.bordados = bordado
                this.authUserId = bordado[0].auth_user;
                bordado.forEach(bor=>{
                  bor.likes.forEach(like=>{
                    if(like.user_id == this.authUserId){
                        console.log('si')
                        bor.liked = true
                      }
                  })
              })
                console.log(this.bordados)
           },
           error=>{
           })
          }

   open(index: number): void {
    this._lightbox.open(this.bordados, index);
  }

  like(e,bordadoid){

    if(e.target.src==AppSettings.FRONT_ENDPOINT + '/assets/like.png'){
        this.bordadoService.unlike(bordadoid,this.authUserId)
            .subscribe()

        e.target.src=AppSettings.FRONT_ENDPOINT + '/assets/unlike.png'
          }else{
        e.target.src=AppSettings.FRONT_ENDPOINT + '/assets/like.png'
        this.bordadoService.like(bordadoid,this.authUserId)
            .subscribe()
    }

  }
}
