import {Component, Input} from '@angular/core';
import {OperableServer} from '../OperableServer';

@Component({
    selector: 'app-operable-server',
    templateUrl: './operable-server.component.html',
    styles: [`
    .online {
        color: white;
    }
    `]
})
export class OperableServerComponent {
    @Input() server: OperableServer;

    constructor() {
    }

    switchStatus() {
      this.server.status = 'Online' ? 'Offline' : 'Online';
    }

    getColor() {
        return this.server[status] === 'Online' ? 'green' : 'red';
    }
}
