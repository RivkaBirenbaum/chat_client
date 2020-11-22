import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/services/chat.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  nickName = new FormControl();
  error = false;
  constructor(private ChatService: ChatService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("userList") == undefined) localStorage.set("userList", "{}");
  }

  signin() {
    var userList = JSON.parse(localStorage.userList);
    if (userList[this.nickName.value] != undefined)
      this.error = true;
    else {
      this.ChatService.nickNameList.push(this.nickName.value);
      userList[this.nickName.value] = "0";
      localStorage.setItem("userList", JSON.stringify(userList));
      localStorage.setItem("user", this.nickName.value);
      this.router.navigate(['/chat']);
      this.error = false;
    }
    this.nickName.setValue("");
  }

}
