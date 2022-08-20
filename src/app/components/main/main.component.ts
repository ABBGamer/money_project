import {Component, HostListener, OnInit} from '@angular/core';
import {CalculateService} from "../../services/calculate.service";
import {HelperService} from "../../services/helper.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isMobile: boolean

  @HostListener('window:resize', ['$event'])
  onResize() {
    this._helperService.setMobile(window.innerWidth <= 768)
  }

  constructor(
    private _service: CalculateService,
    private _helperService: HelperService
  ) {
    this._helperService.setMobile(window.innerWidth <= 768)
    this._helperService.isMobile$.subscribe((data) => {
      this.isMobile = data
    })
  }

  ngOnInit(): void {
  }
}



