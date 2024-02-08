import {Component, HostListener, OnInit} from '@angular/core';
import {GetBlackjackGameResultsDto} from "../../models/GetBlackjackGameResultsDto";
import {BlackjackGameResult} from "../../models/BlackjackGameResult";
import {GetProbabilityInformationDto} from "../../models/GetProbabilityInformationDto";
import {BlackjackProbabilityInformation} from "../../models/BlackjackProbabilityInformation";
import {HttpService} from "../http.service";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-blackjack-multiple-sessions',
  templateUrl: './blackjack-multiple-sessions.component.html',
  styleUrls: ['./blackjack-multiple-sessions.component.scss']
})
export class BlackjackMultipleSessionsComponent implements OnInit {

  public getProbabilityInformationDto: GetProbabilityInformationDto
  public probabilityInformation?: BlackjackProbabilityInformation
  public probabilityLoading: boolean = false;

  constructor(private httpService: HttpService) {
    this.getProbabilityInformationDto = {InitialBalance: 100, BettingAmount: 10, Goal: 200, Iterations: 100}
  }

  ngOnInit(): void {
  }

  public onMultipleSessionsSubmit = () => {
    this.getDataMultipleSessions()
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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log(window.innerWidth)
  }

}
