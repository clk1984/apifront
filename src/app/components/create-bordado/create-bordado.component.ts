import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MdInputModule} from '@angular/material';

@Component({
  selector: 'app-create-bordado',
  templateUrl: './create-bordado.component.html',
  styleUrls: ['./create-bordado.component.css']
})
export class CreateBordadoComponent implements OnInit {
  createForm:FormGroup
  constructor(
      public fb:FormBuilder) {
  this.createForm= fb.group({
      'nombre' :[null,Validators.required],
      'descripcion':[null,Validators.required]
  })
  }

  ngOnInit() {
  }

}
