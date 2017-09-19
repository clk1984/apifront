import { Component, OnInit } from '@angular/core';
import {BordadoService} from '../services/bordado-service.service';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.css'],
  providers:[BordadoService]
})
export class ImagecardComponent implements OnInit {

  private bordados = [];
  constructor(private bordadoService:BordadoService,
              private _lightbox: Lightbox) {
    }

  ngOnInit() {
      this.bordadoService.getBordados()
            .subscribe(bordado=>{
                this.bordados = bordado
                })
           }

   open(index: number): void {
    // open lightbox
    this._lightbox.open(this.bordados, index);
  }
}
