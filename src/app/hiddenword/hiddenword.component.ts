import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-hiddenword',
  templateUrl: './hiddenword.component.html',
  styles: [
    `
        .toomanyclicks {
            background: red;
            color: white;
        }
    `
  ]
})
export class HiddenwordComponent implements OnInit {

  theword: string = 'Swordfish';
  show: boolean = false;
  clicks = [];

  constructor(private test: TestService) { }

  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
    this.clicks.push(this.clicks.length);
  }

}
