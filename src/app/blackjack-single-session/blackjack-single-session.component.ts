import { Component, OnInit } from '@angular/core';
import {GetBlackjackGameResultsDto} from "../../models/GetBlackjackGameResultsDto";
import {BlackjackGameResult} from "../../models/BlackjackGameResult";
import {GetProbabilityInformationDto} from "../../models/GetProbabilityInformationDto";
import {BlackjackProbabilityInformation} from "../../models/BlackjackProbabilityInformation";
import {HttpService} from "../http.service";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-blackjack-single-session',
  templateUrl: './blackjack-single-session.component.html',
  styleUrls: ['./blackjack-single-session.component.scss']
})
export class BlackjackSingleSessionComponent implements OnInit {

  public getGameResultDto: GetBlackjackGameResultsDto
  public gameResults?: BlackjackGameResult[]

  public result?: boolean = false

  constructor(private httpService: HttpService, private sharedService: SharedService) {
    this.getGameResultDto = {InitialBalance: 100, BettingAmount: 10, Goal: 200}
  }

  ngOnInit(): void {
  }

  public onSingleSessionSubmit = () => {
    this.getDataSingleSession()
  }

  private getDataSingleSession = () => {
    this.httpService.getGameResults(this.getGameResultDto).subscribe(
      (res) => {
        this.gameResults = res
        this.result = res[res.length - 1].endBalance != 0;
        this.sharedService.gameResults = res
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
