import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared.service";
import {BlackjackGameResult} from "../../models/BlackjackGameResult";

@Component({
  selector: 'app-blackjack-game-summary',
  templateUrl: './blackjack-game-summary.component.html',
  styleUrls: ['./blackjack-game-summary.component.scss']
})
export class BlackjackGameSummaryComponent implements OnInit {
  public gameResults?: BlackjackGameResult[]
  columnsToDisplay: string[] = ["index", "bet", "playerCards", "dealerCards", "initialDecision", "playerTotal", "dealerTotal", "result", "endBalance"]

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.gameResults = this.sharedService.gameResults
  }

  public joinCards(cards: string[]) {
    let result = ""
    cards.map((card, i) => {
      result += card
      if (i != cards.length - 1) result += ", "
    })
    return result
  }

}
// {
//   "result": "PlayerWon",
//   "bet": 10,
//   "initialDecision": "Hit",
//   "endBalance": 110,
//   "playerCards": [
//   9,
//   5,
//   6
// ],
//   "dealerCards": [
//   8,
//   6,
//   5
// ],
//   "playerTotal": 20,
//   "dealerTotal": 19
// }
