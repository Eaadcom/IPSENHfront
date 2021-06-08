import {Component, Input, OnInit} from '@angular/core';
import {LikeMatchResponse} from '../../models/like-match-response.model';
import {Message} from '../../models/message.model';
import {MessageService} from '../../services/message.service';
import {AuthenticationService} from '../../../authentication/services/authentication.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  @Input() likeMatch!: LikeMatchResponse | any;

  constructor(private messageService: MessageService,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {

  }

  sendMessage($event: { message: string}): void {
    const message: Message = this.createMessageObject($event.message);
    this.addMessageToChatLocally($event.message);

    this.messageService
      .create(message)
      .subscribe(
        response => {},
        error => {
          this.likeMatch.messages?.pop();
        }
      );
  }

  createMessageObject(content: string): Message {
    return new Message(
      this.likeMatch.id,
      content,
      this.getLocalUserId()
    );
  }

  addMessageToChatLocally(message: string): void {
    this.likeMatch.messages?.push({
      content: message,
      created_at: new Date(),
      is_sender: true
    });
  }

  getLocalUserId(): number | undefined {
    return this.authService.getLocalUser()?.id;
  }

  getChatTitleName(): string {
    return this.likeMatch !== undefined
      ? `Chatting with ${this.likeMatch?.matched_user?.first_name}`
      : 'Open a chat';
  }
}
