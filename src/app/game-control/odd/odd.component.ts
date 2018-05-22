import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {

  @Input() timerValue: number;
  numbers = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    const timerValue: number = change.timerValue.currentValue;
    if (timerValue % 2) {
      this.numbers.push(timerValue);
    }
    console.log('oddSimpleChanges', change.timerValue.currentValue);
  }

}
