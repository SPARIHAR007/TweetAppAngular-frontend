import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, FormGroup, AbstractControl , ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/Services/Register/register.service';

import { ConfirmedValidator } from '../../shared/PasswordValidation/confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  UserRegister : FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private registerService : RegisterService) {
    
  }

  ngOnInit(): void {
    this.UserRegister=this.fb.group({
      firstName: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['', [Validators.required, Validators.minLength(6)]]
    },
    {
        validator: ConfirmedValidator("password", "confirmPassword")
    }
  );
}


  onSubmit()
  {

    this.submitted = true;
    if (this.UserRegister.invalid) {
        return;
    }

    var userInfo = 
    {
        first_name:this.UserRegister.value.firstName,
        last_name:this.UserRegister.value.lastName,
        username:this.UserRegister.value.username,
        email:this.UserRegister.value.email,
        password:this.UserRegister.value.password
    }

    this.registerService.register(userInfo).subscribe(data =>
    {
    
      if(data == "User registered successfully") {
        console.log("User registered successfully");
        
      }
      else if(data == "User already exists") {
        console.log("User already exists");
      }
      else if(data == "Please enter all the valid inputs") {
        console.log("Please enter all the valid inputs");
      }
      else{
        console.log("Error");
      }
    });

  }

}
