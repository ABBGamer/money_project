import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'money_project';
  today = new Date();
  jstoday = '';
  daysInMonth: number;
  secondsInMonth: number = 0;
  salary = new FormControl('')
  isVisible: boolean = false;
  salaryPerSecond: number = 0
  salaryPerMinute: number = 0
  salaryPerHour: number = 0
  salaryPerDay: number = 0
  salaryToDay: number = 0
  salaryNow: number = 0
  secondsPerStart: number = 0


  constructor() {
    this.jstoday = this.getDate();

  }

  enterSalary() {
    this.visible(this.isVisible)
  }

  calculate() {
    let secondsToDate = this.getDate()
    let salary = this.salary.value;
    let secondsInMonth = this.secondsInMonth
    if (salary != null) {
      let salaryNum = Number(salary)
      this.salaryPerSecond = salaryNum / secondsInMonth
      this.salaryPerMinute = this.salaryPerSecond * 60
      this.salaryPerHour = this.salaryPerMinute * 60
      this.salaryPerDay = this.salaryPerHour * 24
      this.salaryToDay = this.salaryPerSecond * +secondsToDate
      this.salaryNow = this.salaryPerSecond * this.secondsPerStart

    }
  }

  getDate(): string {
    const Dates = new Date();
    const year: number = Dates.getFullYear();
    const month: any = (Dates.getMonth() + 1);
    const day: any = Dates.getDate();
    const hours: number = Dates.getHours()
    const minutes: number = Dates.getMinutes()
    const seconds: number = Dates.getSeconds()
    this.daysInMonth = 32 - new Date(year, month - 1, 32).getDate();
    const date = ((day * 24 + hours) * 60 + minutes) * 60 + seconds + '' //секунды с начала месяца
    this.secondsInMonth = ((this.daysInMonth * 24) * 60 * 60)
    this.jstoday = date.toString();
    if(!this.isVisible){
      this.secondsPerStart=0;
      console.log(this.secondsPerStart)
      return date;
    }
    else{
      this.secondsPerStart++;
    }
    return date;
  }

  ngOnInit(): void {
    this.salary.setValue('43295.75')
  }

  visible(isVisible: boolean) {
    this.isVisible = !isVisible
    this.salaryNow = 0;
    this.secondsPerStart = 0;
    let refreshId = setInterval(() => {
      this.calculate();
      if (!this.isVisible) {
        clearInterval(refreshId)
      }
    }, 1000)
  }

}



