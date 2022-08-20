import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

interface data {
  year: number,
  secondsToNow: number
}

@Injectable({
  providedIn: 'root'
})

export class CalculateService {
  second: number
  minute: number
  hour: number
  day: number
  month: number
  year: number

  daysInMonth: number
  secondsInMonth: number

  secondsToNow: number

  private _config: BehaviorSubject<data> = new BehaviorSubject<data>({'year': 0, 'secondsToNow': 0})
  readonly config$: Observable<data> = this._config.asObservable()

  constructor() {
    setInterval(() => this.getDate(), 1000)
  }

  calculateSalary(salary: number) {
    const salaryInSecond = salary / this.secondsInMonth
    const salaryInMinute = salaryInSecond * 60
    const salaryInHour = salaryInMinute * 60
    const salaryInDay = salaryInHour * 24
    const salaryInWeek = salaryInDay * 7
    const salaryInMonth = salaryInDay * this.daysInMonth
    return [salaryInSecond, salaryInMinute, salaryInHour, salaryInDay, salaryInWeek, salaryInMonth]
  }

  calculateTime(price: number, salary: number)  {
    let salaryInTime = this.calculateSalary(salary)
    // console.log(price + ' / ' + salaryInTime[0])
    const secondsToBuy = price / salaryInTime[0]
    // console.log(secondsToBuy)
    const second = secondsToBuy % 60;
    // console.log(second.toFixed(0) + ' sec')
    const minutes = ((secondsToBuy - second) / 60) % 60
    // console.log(minutes.toFixed(0) + ' min')
    const hours = ((((secondsToBuy - second) / 60) - minutes) / 60) % 24
    // console.log(hours.toFixed(0) + ' hours')
    const days = ((((secondsToBuy - second) / 60) - minutes) / 60 - hours) / 24
    // console.log(days + ' days')
    return [second, minutes, hours, days]
  }

  getDate() {
    const Dates = new Date()
    this.year = Dates.getFullYear();
    this.month = (Dates.getMonth() + 1);
    this.day = Dates.getDate();
    this.hour = Dates.getHours()
    this.minute = Dates.getMinutes()
    this.second = Dates.getSeconds()
    this.daysInMonth = 32 - new Date(this.year, this.month - 1, 32).getDate();
    this.secondsToNow = ((this.day * 24 + this.hour) * 60 + this.minute) * 60 + this.second
    this.secondsInMonth = ((this.daysInMonth * 24) * 60 * 60)
    const buf: data = {
      'year': this.year,
      'secondsToNow': this.secondsToNow,
    }
    this._config.next(buf)
  }
}
