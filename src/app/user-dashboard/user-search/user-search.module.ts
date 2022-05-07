import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSearchRoutingModule } from './user-search-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserSearchRoutingModule
  ]
})
export class UserSearchModule { }
