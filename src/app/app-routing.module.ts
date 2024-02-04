import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlackjackMainComponent} from "./blackjack-main/blackjack-main.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', component: BlackjackMainComponent},
  {path: 'blackjack', component: BlackjackMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
