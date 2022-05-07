import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserForgotPasswordRoutingModule } from './user-forgot-password-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserForgotPasswordRoutingModule
  ]
})
export class UserForgotPasswordModule { }
