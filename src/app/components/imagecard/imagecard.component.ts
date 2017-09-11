import { Component, OnInit } from '@angular/core';
import {BordadoService} from '../services/bordado-service.service'

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.css'],
  providers:[BordadoService]
})
export class ImagecardComponent implements OnInit {

   private bordados
  constructor(private bordadoService:BordadoService) { }

  ngOnInit() {
      this.bordadoService.getBordados()
            .subscribe(bordado=>{
                this.bordados = bordado
                console.log(this.bordados)
            })
  }

}
