import {AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {OperableServer} from '../OperableServer';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit, AfterContentInit {

  allowNewServer = false;

  serverName: string = '';
  serverCreationStatus = 'No servers have been created';

  @ViewChild('serverStatusInput') serverStatusInput: ElementRef;
  @ContentChild('passedRef') passedRef: ElementRef;

  @Output() serverCreated = new EventEmitter<{name: string, status: string}>();

  constructor() {
      setTimeout(() => {this.allowNewServer = true; }, 2000);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.passedRef.nativeElement.textContent);
  }

  onCreateServer() {
      this.serverCreationStatus = 'Server has been created! Name is ' + this.serverName;
      this.serverCreated.emit({name: this.serverName, status: this.serverStatusInput.nativeElement.value});
      this.serverName = '';

      // this.servers.push(this.serverName);
      // this.operableServers.push(new OperableServer(this.serverName, (this.operableServers.length + 1).toString(), 'Offline'));
      // this.serverCreationStatus = 'Server has been created! Name is ' + this.serverName;
      // this.serverName = '';
      // this.serverCreated = true;
  }

}
