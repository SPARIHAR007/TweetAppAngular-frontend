import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Router } from '@angular/router';

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
export class RegisterService {
  token : String;
  url = environment.url;

  constructor(private router: Router,private http: HttpClient) {
   
  }

  public register(userInfo : any) {
    console.log(userInfo);
    this.router.navigate(['/login']); 
    return this.http
    .post( this.url + "Register", userInfo, httpOptions1 )
    .pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  
}
