import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatPageComponent} from './pages/chat-page/chat-page.component';
import {ChatComponent} from './components/chat/chat.component';
import {LikeMatchListComponent} from './components/like-match-list/like-match-list.component';
import {MessageListComponent} from './components/message-list/message-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbCardModule, NbChatModule, NbLayoutModule, NbListModule, NbThemeModule, NbUserModule} from '@nebular/theme';

@NgModule({
  declarations: [
    ChatPageComponent,
    ChatComponent,
    LikeMatchListComponent,
    MessageListComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbChatModule
  ]
})
export class ChatModule { }
