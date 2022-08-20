import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HelperService} from "../../../services/helper.service";
import {menuItems} from "../../../../environments/routes";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter()
  isMobile: boolean
  menuItems=menuItems
  constructor(
    private _helperService: HelperService
  ) {
    this._helperService.isMobile$.subscribe((data) => {
      this.isMobile = data
    })
  }

  ngOnInit(): void {
  }

}
