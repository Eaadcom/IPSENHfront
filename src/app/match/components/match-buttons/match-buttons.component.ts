import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {UserInterface} from '../../../user/interfaces/user-interface';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {LikeType} from '../../interfaces/like-type';
import {Like} from '../../models/like';

@Component({
  selector: 'app-match-buttons',
  templateUrl: './match-buttons.component.html',
  styleUrls: ['./match-buttons.component.scss']
})
export class MatchButtonsComponent {

  @Input() currentPotentialMatch!: UserInterface | any;
  @Output() buttonClick: EventEmitter<boolean>;
  likeType = LikeType;

  constructor(private matchService: MatchService,
              private authService: AuthenticationService) {
    this.buttonClick = new EventEmitter<boolean>();
  }

  onLike(type: string): void {
    if (this.currentPotentialMatch === undefined) {
      this.buttonClick.emit(false);
    }

    const user_id = this.authService.getLocalUser()?.id;
    const user_id_of_liked_user = parseInt(this.currentPotentialMatch?.id, 10);

    const like = new Like(user_id, user_id_of_liked_user, type);

    this.matchService.postLike(like).subscribe();

    this.buttonClick.emit(true);
  }
}
