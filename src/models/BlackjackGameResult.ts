export interface BlackjackGameResult {
  result: string,
  bet: number,
  initialDecision: string,
  endBalance: number,
  playerCards: string[],
  dealerCards: string[],
  playerTotal: number,
  dealerTotal: number
}
