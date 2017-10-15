import {Component} from "@angular/core";
import {isWhiteSpace} from "tslint";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    color: white
  `]
})
export class ServerComponent {
  serverID:number = 10;
  serverStatus: string = "offline";

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}


