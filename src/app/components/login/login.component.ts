import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';


@Component({
  templateUrl: 'login.component.html',
  providers:[LoginService]
})
export class LoginComponent {

  loginform : FormGroup;
  datas:string[];
  constructor(
                public fb: FormBuilder,
                private _router: Router,
                private route: ActivatedRoute,
                private loginService : LoginService,
              ) {

    this.loginform = fb.group({
      'user' : [null, Validators.required],
      'password' : [null, Validators.required]
    });

  }
  ngOnInit(){
  }

  submitLogin(value: any){
    this.loginService.Login(value.user,value.password)
        .subscribe(data=>{
          console.log(data)
         data.token = btoa(value.user+':'+value.password)
               window.localStorage.setItem('user',JSON.stringify(data));
               window.localStorage.setItem('nombre',data.nombre );
                 setTimeout(() => {
                   this._router.navigate(['/dashboard']);
                 },500);
        },err =>{
                if(err.status == 404 || err.status == 401)
                  alert('Usuario y/o password incorrectos');
              }
          )
  }
}
