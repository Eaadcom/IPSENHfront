import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatPageComponent} from './pages/chat-page/chat-page.component';
import {LikeMatchListComponent} from './components/like-match-list/like-match-list.component';
import {MessageListComponent} from './components/message-list/message-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ChatPageComponent,
    LikeMatchListComponent,
    MessageListComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule
  ]
})
export class ChatModule { }
