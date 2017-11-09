import { Component, OnInit } from '@angular/core';
import {BordadoService} from '../services/bordado-service.service'
import { Lightbox } from 'angular2-lightbox';
import {MatButtonToggleModule} from '@angular/material';
import { Router, ActivatedRoute} from '@angular/router';
import { AppSettings } from '../../globals/appSettings'
@Component({
  selector: 'app-bordados-liked',
  templateUrl: './bordados-liked.component.html',
  styleUrls: ['./bordados-liked.component.css'],
  providers:[BordadoService]
})
export class BordadosLikedComponent implements OnInit {
  likedBordados:any
  myImgUrl:string='/assets/unlike.png';
  authUserId:string
  url = AppSettings + '/'
  constructor(private bordadoService:BordadoService,
              private _lightbox: Lightbox,
              private _router: Router,
              private route: ActivatedRoute,
) { }

  ngOnInit() {
  	this.bordadoService.getBordadosLiked()
  		.subscribe(bor=>
  			{this.likedBordados=bor
         this.likedBordados.forEach(bordados=>{
           bordados.liked= true
         })
         if (bor.length > 0) {
             this.authUserId = bor[0].auth_user;

         }

          console.log(bor.length)})
  }
    open(index: number): void {
    this._lightbox.open(this.likedBordados, index);
  }

  like(e,bordadoid){

    if(e.target.src==AppSettings.API_ENDPOINT + '/assets/like.png'){
        this.bordadoService.unlike(bordadoid,this.authUserId)
            .subscribe()

        e.target.src=AppSettings.API_ENDPOINT + '/assets/unlike.png'
          }else{
        e.target.src=AppSettings.API_ENDPOINT + '/assets/like.png'
        this.bordadoService.like(bordadoid,this.authUserId)
            .subscribe()
    }

  }
}
