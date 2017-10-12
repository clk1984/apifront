import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormGroup,FormBuilder,Validators,EmailValidator} from '@angular/forms'
import {LoginService} from '../services/login.service'
import { PasswordValidation } from '../../validators/password-validation';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[LoginService],
    encapsulation: ViewEncapsulation.None

})
export class RegisterComponent implements OnInit {
    registerForm:FormGroup

  constructor(
      public fb:FormBuilder,
      private loginService:LoginService,
      private _router: Router,
      private route: ActivatedRoute,) {
              this.registerForm  = fb.group({
                   'email':[null,Validators.required],
                   'name':[null,Validators.required],
                   'password':[null,Validators.required],
                   'c_password':[null,Validators.required],
              },{validator: PasswordValidation.MatchPassword})
       }

  ngOnInit() {
  }
  submitRegister(value:any){
     this.loginService.register(value)
           .subscribe(data=>{
             console.log(data)
             window.sessionStorage.setItem('user',data.success.name);
             window.sessionStorage.setItem('token',data.success.token );
                setTimeout(() => {
                   this._router.navigate(['/cards']);
                 },500);
           },
             err =>{
                if(err.status == 500 || err.status == 401)
                  alert('Cannot register.Check your input');
              })
               }
}
