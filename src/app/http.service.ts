import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GetGameResultsDto} from "../models/GetGameResultsDto";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = "https://localhost:44369/api/"

  constructor(private httpClient: HttpClient) { }

  public getGameResults(gatGameResultsDto: GetGameResultsDto){
    return this.httpClient.get(this.baseUrl +
      "Blackjack/GetGameResults?InitialBalance=" + gatGameResultsDto.InitialBalance +
      "&BettingAmount=" + gatGameResultsDto.BettingAmount +
      "&Goal=" + gatGameResultsDto.Goal)
  }
}

// https://localhost:44369/api/chart?InitialBalance=100&BettingAmount=10&Goal=200
// https://localhost:44369/api/Blackjack/GetGameResults?InitalBalance=100&BettingAmount=10&Goal=200
