import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

const httpOptions1 = {
  headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Credentials': 'true'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token : String;
  url = environment.url;

  private loggedIn = false;
  constructor(private http: HttpClient) {  }

  public forgotPassword(forgotPass : any) {
    console.log(forgotPass);
    return this.http.post( this.url + "ForgotPassword", forgotPass, httpOptions1);
  }

  public resetPassword(resetPass : any) {
    return this.http.put( this.url + "ResetPassword", resetPass, httpOptions1);
  }

  public login(userName : string, password: string) {
      let UserLogin =
      {
        email:userName,
        password :password
      }
      return this.http
      .post(
        this.url + "Login",UserLogin,
        httpOptions1
      )
      .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  public storeUserData(userId : string, fullName: string, email: string, username: string, token :string)
  {
    console.log("store user function");
    localStorage.setItem("userId", userId);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email",email);
    localStorage.setItem("loginId",username);
    localStorage.setItem("token",token);
    console.log(userId);
    console.log(username);
  }

  public isLoggedIn() {
    if (localStorage.getItem("loginId")) 
      return (this.loggedIn = true);
    return this.loggedIn = false;
  }
  
  public logout() {
    localStorage.clear();
    this.loggedIn = false;
  }

}
