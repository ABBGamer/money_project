import {Component, isDevMode, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CalculateService} from "../../services/calculate.service";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  price = new FormControl()
  salary = new FormControl()
  isVisible: boolean = false;
  salaryInTime: number[]


  constructor(
    private _calculateService: CalculateService
  ) {
    if (isDevMode()) {
      this.price.setValue(5000)
      this.salary.setValue(100160)
    }
  }

  ngOnInit(): void {
  }

  enterData() {
    this.salaryInTime = this._calculateService.calculateTime(Number(this.price.value), Number(this.salary.value))
    this.isVisible=!this.isVisible
  }
}
