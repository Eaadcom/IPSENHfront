import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LikeMatchResponse} from '../../models/like-match-response.model';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import {MessageResponse} from '../../models/message-response.model';
import {NbTokenStorage} from '@nebular/auth';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-like-match-list',
  templateUrl: './like-match-list.component.html',
  styleUrls: ['./like-match-list.component.scss']
})
export class LikeMatchListComponent implements OnInit, OnDestroy {

  @Input() likeMatches: LikeMatchResponse[] = [];
  showLikeMatch!: LikeMatchResponse;
  echo: Echo;
  pusher: Pusher;

  constructor(private authService: NbTokenStorage) {
    this.pusher = new Pusher(environment.pusher.key);
    this.echo = new Echo(environment.pusher);
  }

  ngOnInit(): void {
    this.subscribeToChannels();
  }

  ngOnDestroy(): void {
    this.unsubscribingToChannels();
  }

  showMessagesOfLikeMatch(likeMatch: LikeMatchResponse): void {
    this.showLikeMatch = likeMatch;
    likeMatch.showNotification = false;
  }

  getNameOfLikeMatchUser(likeMatch: LikeMatchResponse): string {
    return likeMatch.matched_user?.first_name as string;
  }

  subscribeToChannels(): void {
    this.likeMatches.forEach((likeMatch: LikeMatchResponse) => {
      const channel = this.echo.channel(`messages.${likeMatch?.id}`);

      channel.listen('.my-event', (data: any) => {
        if (data.sender_id !== this.authService.get().getPayload().id) {
          this.addMessageToChat(likeMatch, data);
          this.setShowNotificationOnLikeMatch(likeMatch);
        }
      });
    });
  }

  unsubscribingToChannels(): void {
    this.likeMatches.forEach((likeMatch: LikeMatchResponse) => {
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

  setShowNotificationOnLikeMatch(likeMatch: LikeMatchResponse): void {
    likeMatch.showNotification = likeMatch !== this.showLikeMatch;
  }
}
