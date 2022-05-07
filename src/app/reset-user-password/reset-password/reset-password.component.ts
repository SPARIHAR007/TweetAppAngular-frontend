
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/Services/Login/login.service';
import { FormBuilder,  Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ConfirmedValidator } from '../../shared/PasswordValidation/confirm-password.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm: FormGroup;

  private _token: string;
  private _email: string;

  constructor(private _loginService: LoginService,private fb: FormBuilder, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.resetPasswordForm=this.fb.group({
     
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['', [Validators.required, Validators.minLength(6)]]
    },
    {
        validator: ConfirmedValidator("password", "confirmPassword")
    }
  );
      this._token = this._route.snapshot.queryParams['token'];
      this._email = this._route.snapshot.queryParams['email'];
  }

  public resetPassword () {
  
    const resetPass = {
      password: this.resetPasswordForm.value.password,
      token: this._token,
      email: this._email
    }
  
    this._loginService.resetPassword(resetPass)
    .subscribe(data => {
      console.log(data);
    },
    error => {
      console.log(error);
    })
  }


}