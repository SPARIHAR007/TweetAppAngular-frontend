import { Component, OnInit } from '@angular/core';
import { AuthorizedService } from 'src/app/shared/Services/Authorized/authorized.service';

import { FormBuilder,  Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ConfirmedValidator } from '../../../shared/PasswordValidation/confirm-password.validator';
import { environment } from 'src/environments/environment';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : any=[];
  ChangePassword: FormGroup;
  submitted = false;
  passChangedPassed=false;
  passChangedFailed=false;
  
  constructor( private fb: FormBuilder, private router: Router, private authorizedService: AuthorizedService) { }


  ngOnInit(): void {

      const id = localStorage.getItem("userId") == null ? "" : localStorage.getItem("userId");

      if(id != null)
      {
        console.log(id);
        this.getUserById(id);
      }
      this.ChangePassword = this.fb.group({
        password:['',[Validators.required,Validators.minLength(6)]],
        newPassword:['',[Validators.required,Validators.minLength(6)]],
        confirmPassword:['', [Validators.required, Validators.minLength(6)]]
      },
      {
          validator: ConfirmedValidator("newPassword", "confirmPassword")
      });

  }

  private getUserById(userId : string)
  {
      this.authorizedService.getUserById(userId).subscribe(data=>
      {
          this.user = data;
          console.log(data);                                                                                                                                                                                                                                                                
      });

  }


  changePassword()
  {
    this.submitted = true;
    
  this.passChangedPassed=false;
  this.passChangedFailed=false;
    if (this.ChangePassword.invalid) {
      console.log("invalid");
      
        return;
    }
    if(this.ChangePassword.value.password!=this.user[0].password){  
      this.passChangedFailed=true;
      return;
    }
    const user = {
      email: this.user[0].email,
      password : this.ChangePassword.value.password,
      newPassword : this.ChangePassword.value.newPassword
    }
    this.ChangePassword.reset();
    this.passChangedPassed=true;
    this.authorizedService.changePassword(user)
    .subscribe(data =>{
      console.log(data);
    }
    );


  }



}
