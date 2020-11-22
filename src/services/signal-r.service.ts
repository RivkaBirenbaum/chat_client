import { Injectable, EventEmitter } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { environment } from 'src/environments/environment';
import * as model from '../models/model';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  hubConnection: signalR.HubConnection
  onSendMessage = new EventEmitter();
  serviceBase: string = "https://localhost:5001/";
  public addFunctions = () => {
    this.hubConnection.on('sendmessages', (data: model.IRoom) => {
      this.onSendMessage.emit(data);
    });
  }
  constructor() {
  }

  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.serviceBase + 'singalR', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build()
    this.hubConnection.send
    this.hubConnection
      .start()
      .then(
        () => {
          console.log('Connection started');
          this.addFunctions();
        }
      )
      .catch(
        err => console.log('Error while starting connection: ' + err
        ))
  }
}
