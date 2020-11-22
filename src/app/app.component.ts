import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignalRService } from 'src/services/signal-r.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Munters Chat!';

  constructor(private SignalRService: SignalRService, private router: Router) {
    this.SignalRService.startConnection();
    if (!localStorage.user)
      this.router.navigate(["signIn"]);
    else
      this.router.navigate(["chat"]);
  }
}
