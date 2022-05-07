import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/Services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserLogin: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder, private router: Router, private loginService : LoginService) { }

  ngOnInit(): void {
    this.UserLogin = this.fb.group({
      username: [ "", [ Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  OnSubmit()
  {
      this.submitted = true;
      if (this.UserLogin.invalid) {
        console.log("invalid");
          return;
      }

      this.loginService.login(this.UserLogin.value.username, this.UserLogin.value.password)
      .subscribe(data =>
      {
          if(data == "User not found")
          {
            console.log("User not found");
          }
          else if( data == "Username or Password is incorrect")
          {
            console.log("Username or Password is incorrect")
          }
          else if(data == "Enter all the valid required fields")
          {
            console.log("Enter all the valid required fields");
          }
          else{
            console.log(data);
            const fullName = data[0].first_name + " " + data[0].last_name;
            this.loginService.storeUserData(
              data[0].id,
              fullName,
              data[0].email,
              data[0].username,
              data[0].token
            );
            this.router.navigate(['/user-dashboard']);
          }
      });


  }


  
}
