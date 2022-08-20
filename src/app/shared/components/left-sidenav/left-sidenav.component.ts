import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {menuItems} from "../../../../environments/routes";

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss']
})
export class LeftSidenavComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter()

  menuItems = menuItems

  constructor() {
  }

  ngOnInit(): void {
  }

}
