import { Injectable } from '@angular/core';
import {BlackjackGameResult} from "../models/BlackjackGameResult";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public gameResults?: BlackjackGameResult[]

  constructor() { }

}
