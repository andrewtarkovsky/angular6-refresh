import {AfterContentInit, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnChanges {

  timer: any;
  timerValue: number = 0;

  @Output() tick = new EventEmitter<{secondType: string, timerValue: number}>();

  constructor() {
  }

  ngOnInit() {
    this.setTimer();
  }

  setTimer() {
    this.timer = setInterval(() => {
        this.timerValue += 1;
        this.tick.emit({secondType: 'unknown', timerValue: this.timerValue});
    }, 1000);
  }

  ngOnChanges (changed: SimpleChanges) {
    console.log('changed', changed);
  }
}


