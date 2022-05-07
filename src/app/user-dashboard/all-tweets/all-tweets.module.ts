import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTweetsRoutingModule } from './all-tweets-routing.module';
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
    AllTweetsRoutingModule
  ]
})
export class AllTweetsModule { }
