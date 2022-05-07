import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';

const routes: Routes = [
  { path:'',component:UserDashboardComponent,
    children:[
      { path:'', loadChildren:() => import("src/app/user-dashboard/all-tweets/all-tweets.module").then(m => m.AllTweetsModule)},
      { path:'all-users', loadChildren:() => import("src/app/user-dashboard/all-users/all-users.module").then(m => m.AllUsersModule)},
      { path:'all-tweets', loadChildren:() => import("src/app/user-dashboard/all-tweets/all-tweets.module").then(m => m.AllTweetsModule)},
      { path:'my-tweets', loadChildren:() => import("src/app/user-dashboard/my-tweets/my-tweets.module").then(m => m.MyTweetsModule)},
      { path:'my-profile', loadChildren:() => import("src/app/user-dashboard/user-profile/user-profile.module").then(m => m.UserProfileModule)},
      { path:'add-tweet', loadChildren:() => import("src/app/user-dashboard/add-tweet/add-tweet.module").then(m => m.AddTweetModule)},
      { path:'search/:userName', loadChildren:() => import("src/app/user-dashboard/user-search/user-search.module").then(m => m.UserSearchModule)},
      { path:'tweet/:tweetId', loadChildren:() => import("src/app/user-dashboard/user-tweet/user-tweet.module").then(m => m.UserTweetModule)}
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
