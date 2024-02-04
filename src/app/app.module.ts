import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackjackChartComponent } from './blackjack-chart/blackjack-chart.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlackjackMainComponent } from './blackjack-main/blackjack-main.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackjackChartComponent,
    BlackjackMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
