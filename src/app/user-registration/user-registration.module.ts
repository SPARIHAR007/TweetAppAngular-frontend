import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { RegisterComponent } from './register/register.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRegistrationRoutingModule
  ]
})
export class UserRegistrationModule { }
