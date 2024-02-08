import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlackjackMainComponent} from "./blackjack-main/blackjack-main.component";
import {AppComponent} from "./app.component";
import {BlackjackGameSummaryComponent} from "./blackjack-game-summary/blackjack-game-summary.component";
import {BlackjackSingleSessionComponent} from "./blackjack-single-session/blackjack-single-session.component";
import {BlackjackMultipleSessionsComponent} from "./blackjack-multiple-sessions/blackjack-multiple-sessions.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'blackjack', component: BlackjackMainComponent},
  {path: 'blackjack/single-session/summary', component: BlackjackGameSummaryComponent},
  {path: 'blackjack/single-session', component: BlackjackSingleSessionComponent},
  {path: 'blackjack/multiple-sessions', component: BlackjackMultipleSessionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
