import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-blackjack-main',
  templateUrl: './blackjack-main.component.html',
  styleUrls: ['./blackjack-main.component.scss']
})
export class BlackjackMainComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  getData() {
    this.httpService.getGameResults({InitialBalance: 100, BettingAmount: 10, Goal: 200}).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
