import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LikeMatchResponse} from '../../models/like-match-response.model';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import {MessageResponse} from '../../models/message-response.model';
import {AuthenticationService} from '../../../authentication/services/authentication.service';

@Component({
  selector: 'app-like-match-list',
  templateUrl: './like-match-list.component.html',
  styleUrls: ['./like-match-list.component.scss']
})
export class LikeMatchListComponent implements OnInit, OnDestroy {

  @Input() likeMatches!: LikeMatchResponse[];
  showLikeMatch!: LikeMatchResponse;
  echo: Echo;
  pusher: Pusher;

  constructor(private authService: AuthenticationService) {
    this.pusher = new Pusher('2649bb334eb27f74faf8');
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: '2649bb334eb27f74faf8',
      cluster: 'eu',
      forceTLS: true
    });
  }

  ngOnInit(): void {
    this.subscribeToChannels();
  }

  ngOnDestroy(): void {
    this.unsubscribingToChannels();
  }

  showMessagesOfLikeMatch(likeMatch: LikeMatchResponse): void {
    this.showLikeMatch = likeMatch;
  }

  getNameOfLikeMatchUser(likeMatch: LikeMatchResponse): string {
    return likeMatch.matched_user?.first_name as string;
  }

  subscribeToChannels(): void {
    this.likeMatches?.forEach( (likeMatch: LikeMatchResponse) => {
      const channel = this.echo.channel(`messages.${likeMatch?.id}`);

      channel.listen('.my-event', (data: any) => {
        if (data.sender_id !== this.authService.getLocalUser()?.id) {
          this.addMessageToChat(likeMatch, data);
        }
      });
    });
  }

  unsubscribingToChannels(): void {
    this.likeMatches.forEach( (likeMatch: LikeMatchResponse) => {
      this.echo.leaveChannel(`messages.${likeMatch.id}`);
    });
  }

  addMessageToChat(likeMatch: LikeMatchResponse, data: MessageResponse): void {
    likeMatch.messages?.push({
      content: data.content,
      created_at: data.created_at,
      is_sender: false
    });
  }
}
