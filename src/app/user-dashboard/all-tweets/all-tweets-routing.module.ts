import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetsComponent } from './tweets/tweets.component';

const routes: Routes = [
  {path:'', component:TweetsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTweetsRoutingModule { }
