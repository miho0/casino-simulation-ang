import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GetBlackjackGameResultsDto} from "../models/GetBlackjackGameResultsDto";
import {Observable} from "rxjs";
import {BlackjackGameResult} from "../models/BlackjackGameResult";
import {GetProbabilityInformationDto} from "../models/GetProbabilityInformationDto";
import {BlackjackProbabilityInformation} from "../models/BlackjackProbabilityInformation";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = "https://localhost:44369/api/"

  constructor(private httpClient: HttpClient) { }

  public getGameResults(getGameResultsDto: GetBlackjackGameResultsDto): Observable<BlackjackGameResult[]>{
    return this.httpClient.get<BlackjackGameResult[]>(this.baseUrl +
      "Blackjack/GetGameResults?InitialBalance=" + getGameResultsDto.InitialBalance +
      "&BettingAmount=" + getGameResultsDto.BettingAmount +
      "&Goal=" + getGameResultsDto.Goal)
  }

  public getProbabilityInformation(getProbabilityInformationDto: GetProbabilityInformationDto): Observable<BlackjackProbabilityInformation> {
    return this.httpClient.get<BlackjackProbabilityInformation>(this.baseUrl +
      "Blackjack/GetProbability?InitialBalance=" + getProbabilityInformationDto.InitialBalance +
      "&BettingAmount=" + getProbabilityInformationDto.BettingAmount +
      "&Goal=" + getProbabilityInformationDto.Goal +
      "&itterations=" + getProbabilityInformationDto.Iterations)
  }

}
