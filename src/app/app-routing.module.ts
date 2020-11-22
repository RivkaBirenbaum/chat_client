import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: "signIn", component: SignInComponent },
  { path: "chat", component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
