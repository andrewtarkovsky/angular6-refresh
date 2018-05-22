import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    timerValue: number;

    onTickReceived(tickData) {
      this.timerValue = tickData.timerValue;
      console.log(this.timerValue);
    }
}
