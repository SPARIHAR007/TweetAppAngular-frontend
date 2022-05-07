import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/Services/Login/login.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  UserName : String = "Welcome, ";
  constructor(public loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
    //this.getWelcomeUserName();
  }
  
  getWelcomeUserName()
  {
    // const fullName = localStorage.getItem("fullName") == null ? "" : localStorage.getItem("fullName");
    // console.log(fullName);
    // if(fullName != null)
    // {
    //   this.UserName += fullName.toLocaleUpperCase();
    // }
  }

  onLogoutClick(){
    this.loginService.logout();
    this.router.navigate(['/login']);
    return false;
  }


}
