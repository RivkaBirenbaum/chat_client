import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  roomList: string[] = [];
  @Output() selectRoom = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.roomList.push("General");
  }

}
