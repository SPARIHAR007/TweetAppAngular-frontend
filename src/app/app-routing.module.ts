import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationCheck } from './shared/AuthorizeCheck/AuthorizeCheck';

const routes: Routes = [
  
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path:'login', loadChildren: ()=> import('src/app/user-login/user-login.module').then(m=>m.UserLoginModule)},
  { path:'forgot-password',loadChildren: () => import('src/app/user-forgot-password/user-forgot-password.module').then(m=>m.UserForgotPasswordModule)},
  { path:'reset-password',loadChildren: () => import('src/app/reset-user-password/reset-user-password.module').then(m => m.ResetUserPasswordModule)},
  { path:'register',loadChildren: ()=> import('src/app/user-registration/user-registration.module').then(m=>m.UserRegistrationModule)},
  { path:'home',loadChildren: () => import('src/app/homepage/homepage.module').then(m => m.HomepageModule)},
  { path:'user-dashboard', loadChildren:() => import("src/app/user-dashboard/user-dashboard.module").then(m => m.UserDashboardModule), canActivate: [AuthorizationCheck]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
