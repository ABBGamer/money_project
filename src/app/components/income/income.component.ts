import {Component, HostListener, isDevMode, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CalculateService} from "../../services/calculate.service";
import {ActivityService} from "../../services/activity.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {HelperService} from "../../services/helper.service";

@UntilDestroy()

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})

export class IncomeComponent implements OnInit {
  isMobile: boolean

  salary = new FormControl()
  salaryInTime: number[]
  isVisible = false
  salaryToNow: number = 0
  salaryNow: number = 0
  time: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this._helperService.setMobile(window.innerWidth <= 768)
  }

  constructor(
    private _calculateService: CalculateService,
    private _activityService: ActivityService,
    private _helperService: HelperService
  ) {
    this._helperService.setMobile(window.innerWidth <= 768)
    this._helperService.isMobile$.subscribe((data) => {
      this.isMobile = data
    })
  }

  enterSalary() {
    this.salaryInTime = this._calculateService.calculateSalary(Number(this.salary.value))
    // this._activityService.showOrHide(this.isVisible)
    this.time = 0
    this.salaryNow = 0
    this.isVisible = this._activityService.showOrHide(this.isVisible)

    //console.log(this.salaryInTime[0])
  }

  ngOnInit(): void {
    // this.salaryInTime = this._calculateService.calculateSalary(Number(this.salary.value))

    this._calculateService.config$.pipe(untilDestroyed(this))
      .subscribe(data => {
        if (data && this.isVisible) {
          this.time++
          this.salaryToNow = data.secondsToNow * this.salaryInTime[0]
          this.salaryNow = this.time * this.salaryInTime[0]
          if (isDevMode()) {
            // console.log(data.secondsToNow)
          }
        }
      })
  }

  back() {
    this.isVisible = this._activityService.showOrHide(this.isVisible)
  }

}
