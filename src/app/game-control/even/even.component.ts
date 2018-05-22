import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {

    @Input() timerValue: number;
    numbers = [];
    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(change: SimpleChanges) {
        const timerValue: number = change.timerValue.currentValue;
        if (timerValue % 2 === 0) {
            this.numbers.push(timerValue);
        }
        console.log('oddSimpleChanges', change.timerValue.currentValue);
    }

}
