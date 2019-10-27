import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-rom',
  templateUrl: './num-rom.component.html',
  styleUrls: ['./num-rom.component.scss']
})
export class NumRomComponent implements OnInit {
  public romanValue = '';
  public numericVal: number;
  constructor() { }

  ngOnInit() {

  }
  onSubmit() {
    this.romanValue = this.convertToRoman(this.numericVal);
  }

  convertToRoman(num) {

    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };

    let str = '';

    for (let [romanKey, romanValue] of Object.entries(roman)) {

      let repeatCount = Math.floor(num / romanValue);
      num -= repeatCount * romanValue;
      str += romanKey.repeat(repeatCount);

    }

    return str;
  }

}
