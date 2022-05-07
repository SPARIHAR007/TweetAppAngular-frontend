import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserDashboardRoutingModule
  ],
  
})
export class UserDashboardModule { }
