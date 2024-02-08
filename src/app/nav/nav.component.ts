import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuService} from "../menu.service";
import {MenuItem} from "../../models/MenuItem";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public isOpen: boolean = false;
  public menuItems: MenuItem[]

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.menuItems
  }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.isOpen = !this.isOpen
  }
}
