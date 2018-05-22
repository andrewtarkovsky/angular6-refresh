import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OperableServer} from '../OperableServer';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit, AfterViewInit {

  servers = [];
  operableServers = [];
  @ViewChild('uo_header') uoHeader: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.uoHeader.nativeElement.textContent);
  }

  onServerCreated(serverData: {name: string, status: string}) {
    console.log(serverData);
    this.servers.push(serverData.name);
    this.operableServers.push(new OperableServer(serverData.name, (this.operableServers.length + 1).toString(), serverData.status));
  }

  // onUpdateServerName(event: any) {
  //   this.serverName = (<HTMLInputElement> event.target).value;
  // }

}
