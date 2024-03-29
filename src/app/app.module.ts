import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackjackChartComponent } from './blackjack-chart/blackjack-chart.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlackjackMainComponent } from './blackjack-main/blackjack-main.component';
import {NgChartsModule} from "ng2-charts";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { BlackjackGameSummaryComponent } from './blackjack-game-summary/blackjack-game-summary.component';
import {MatTableModule} from "@angular/material/table";
import { BlackjackMultipleSessionsComponent } from './blackjack-multiple-sessions/blackjack-multiple-sessions.component';
import { BlackjackSingleSessionComponent } from './blackjack-single-session/blackjack-single-session.component';
import { NavComponent } from './nav/nav.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    BlackjackChartComponent,
    BlackjackMainComponent,
    BlackjackGameSummaryComponent,
    BlackjackMultipleSessionsComponent,
    BlackjackSingleSessionComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
