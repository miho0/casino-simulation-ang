import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlackjackMainComponent} from "./blackjack-main/blackjack-main.component";
import {BlackjackGameSummaryComponent} from "./blackjack-game-summary/blackjack-game-summary.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'blackjack', component: BlackjackMainComponent},
  {path: 'blackjack/summary', component: BlackjackGameSummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
