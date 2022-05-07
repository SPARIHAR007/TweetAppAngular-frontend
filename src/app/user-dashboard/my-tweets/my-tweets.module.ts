import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTweetsRoutingModule } from './my-tweets-routing.module';
import { TweetsComponent } from './tweets/tweets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TweetsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyTweetsRoutingModule
  ]
})
export class MyTweetsModule { }
