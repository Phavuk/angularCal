import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numberOne: number;
  numberTwo: number;
  result = 0;

  constructor() { }

  ngOnInit() {
  }

  add() {
    if (this.numberOne != null || this.numberTwo != null) {
      this.result = this.numberOne + this.numberTwo;
    }
  }

  sub() {
    if (this.numberOne != null || this.numberTwo != null) {
      this.result = this.numberOne - this.numberTwo;
    }
  }

  multiply() {
    if (this.numberOne != null || this.numberTwo != null) {
      this.result = this.numberOne * this.numberTwo;
    }
  }

  divide() {
    if (this.numberOne > 0 || this.numberTwo > 0) {
      this.result = this.numberOne / this.numberTwo;
    }
  }

  reset() {
    this.result = 0;
    this.numberOne = null;
    this.numberTwo = null;
  }

}
