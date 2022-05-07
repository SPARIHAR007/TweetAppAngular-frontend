import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTweetRoutingModule } from './user-tweet-routing.module';
import { TweetComponent } from './tweet/tweet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TweetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserTweetRoutingModule
  ]
})
export class UserTweetModule { }
