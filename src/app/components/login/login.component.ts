import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';


@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  loginForm : FormGroup;
  datas:string[];
  constructor(
                public fb: FormBuilder,
                private _router: Router,
                private route: ActivatedRoute,
                private loginService : LoginService,
              ) {

    this.loginForm = fb.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required]
    });

  }
  ngOnInit(){
  }

  submitLogin(value: any){
    this.loginService.Login(value)
        .subscribe(data=>{
          console.log(data)
           window.localStorage.setItem('user',data.success.name);
           window.localStorage.setItem('token',data.success.token );
                setTimeout(() => {
                   this._router.navigate(['/cards']);
                 },500);
        },err =>{
                if(err.status == 404 || err.status == 401)
                  alert('Usuario y/o password incorrectos');
              }
          )
  }
}
