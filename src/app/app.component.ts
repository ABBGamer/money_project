import {Component, HostListener} from '@angular/core';
import {HelperService} from "./services/helper.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isMobile: boolean

  @HostListener('window:resize', ['$event'])
  onResize() {
    this._helperService.setMobile(window.innerWidth <= 768)
  }

  constructor(
    private _helperService: HelperService
  ) {
    this._helperService.setMobile(window.innerWidth <= 768)
    this._helperService.isMobile$.subscribe((data) => {
      this.isMobile = data
    })
  }

}
