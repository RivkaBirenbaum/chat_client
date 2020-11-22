import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage, IRoom } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  serviceBase: string = "https://localhost:5001/";
  nickNameList: string[] = [];
  constructor(private HttpClient: HttpClient) { }

  sendMessage(model: IRoom): Observable<IRoom> {
    return this.HttpClient.post<IRoom>(this.serviceBase + "chat/SendMessages", model);
  }

  loadData(roomName: string): Observable<IMessage[]> {
    return this.HttpClient.get<IMessage[]>(this.serviceBase + "chat/LoadData?roomName=" + roomName);
  }
}
