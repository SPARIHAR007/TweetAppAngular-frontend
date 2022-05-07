import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetUserPasswordRoutingModule } from './reset-user-password-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ResetUserPasswordRoutingModule
  ]
})
export class ResetUserPasswordModule { }
