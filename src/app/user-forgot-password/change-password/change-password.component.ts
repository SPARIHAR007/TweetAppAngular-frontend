import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/shared/Services/Login/login.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public forgotPasswordForm: FormGroup

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl("", [Validators.required])
    })
  }


  forgotPassword()
  {
    const forgotPass = 
    {
      email: this.forgotPasswordForm.value.email,
      clientURI: 'http://localhost:4200/reset-password'
    }

    this._loginService.forgotPassword(forgotPass).subscribe(data =>
    {
        console.log(data);
    }, err =>
    {
        console.log(err);
    }
    );


  }
 
}
