import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { LoginComponent } from './login/login.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserLoginModule { }
