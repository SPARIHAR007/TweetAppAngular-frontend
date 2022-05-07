import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllUsersRoutingModule } from './all-users-routing.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    AllUsersRoutingModule
  ]
})
export class AllUsersModule { }
