import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IMessage, IRoom } from 'src/models/model';
import { ChatService } from 'src/services/chat.service';
import { SignalRService } from 'src/services/signal-r.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
  messageList: IMessage[] = [];
  message = new FormControl();
  user: string = localStorage.user;
  @Input() room: string;
  constructor(private ChatService: ChatService, private SignalRService: SignalRService) {
  }

  ngOnInit(): void {
    this.ChatService.loadData(this.user).subscribe((response: IMessage[]) => {
      this.messageList = this.messageList.concat(response);
    });
    this.SignalRService.onSendMessage.subscribe((data: IRoom) => {
      if (this.room == data.name)
        this.messageList.push(data.messages[0]);
    })
  }


  sendMessage() {
    if (this.message.value.length < 5)
      return;
    var localMessage: IMessage[] = [];
    localMessage.push({ user: this.user, date: new Date, message: this.message.value });
    var model: IRoom = {
      name: this.room,
      messages: localMessage
    }
    this.ChatService.sendMessage(model).subscribe(response => {
      this.message.setValue("");
    });
  }
}
