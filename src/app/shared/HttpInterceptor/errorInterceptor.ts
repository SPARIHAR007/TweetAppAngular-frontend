import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { LoginService } from '../Services/Login/login.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
 constructor(private loginServide: LoginService, private router: Router) { }

 intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {

 return newRequest.handle(request).pipe(catchError(err =>{
     
 if (err.status === 401) {
 //if 401 response returned from api, logout from application & redirect to login page.
 this.loginServide.logout();
 }

 const error = err.error.message || err.statusText;
 return Observable.throw(error);
 }));
 }
}