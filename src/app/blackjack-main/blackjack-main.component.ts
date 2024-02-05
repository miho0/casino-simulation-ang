import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {GetBlackjackGameResultsDto} from "../../models/GetBlackjackGameResultsDto";
import {BlackjackGameResult} from "../../models/BlackjackGameResult";
import {GetProbabilityInformationDto} from "../../models/GetProbabilityInformationDto";
import {BlackjackProbabilityInformation} from "../../models/BlackjackProbabilityInformation";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-blackjack-main',
  templateUrl: './blackjack-main.component.html',
  styleUrls: ['./blackjack-main.component.scss']
})
export class BlackjackMainComponent implements OnInit {
  public getGameResultDto: GetBlackjackGameResultsDto
  public gameResults?: BlackjackGameResult[]

  public getProbabilityInformationDto: GetProbabilityInformationDto
  public probabilityInformation?: BlackjackProbabilityInformation
  public result?: boolean = false
  public probabilityLoading: boolean = false;

  constructor(private httpService: HttpService, private sharedService: SharedService) {
    this.getGameResultDto = {InitialBalance: 100, BettingAmount: 10, Goal: 200}
    this.getProbabilityInformationDto = {InitialBalance: 100, BettingAmount: 10, Goal: 200, Iterations: 100}
  }

  ngOnInit(): void {
  }

  public onSingleSessionSubmit = () => {
    this.getDataSingleSession()
  }

  public onMultipleSessionsSubmit = () => {
    this.getDataMultipleSessions()
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

  private getDataMultipleSessions = () => {
    this.probabilityLoading = true
    this.httpService.getProbabilityInformation(this.getProbabilityInformationDto).subscribe(
      (res) => {
        this.probabilityInformation = res
        this.probabilityLoading = false
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
