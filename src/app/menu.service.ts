import { Injectable } from '@angular/core';
import {MenuItem} from "../models/MenuItem";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menuItems: MenuItem[] = [
    {name: "Blackjack Single Session", path: "/blackjack/single-session"},
    {name: "Blackjack Multiple Sessions", path: "/blackjack/multiple-sessions"}
  ]
  constructor() { }
}
