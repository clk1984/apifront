import { Component, OnInit } from '@angular/core';
import {BordadoService} from '../services/bordado-service.service'

@Component({
  selector: 'app-bordados-liked',
  templateUrl: './bordados-liked.component.html',
  styleUrls: ['./bordados-liked.component.css'],
  providers:[BordadoService]
})
export class BordadosLikedComponent implements OnInit {
  likedBordados:any
  constructor(private bordadoService:BordadoService) { }

  ngOnInit() {
  	this.bordadoService.getBordadosLiked()
  		.subscribe(bor=>
  			this.likedBordados=bor)
  }

}
