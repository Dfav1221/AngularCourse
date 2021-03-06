import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server was created';
  allowNewServers = false;
  serverName = 'test';
  serverId = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created, and his name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateServerId(event: Event) {
    this.serverId = Number.parseInt((<HTMLInputElement>event.target).value);
  }
}
