import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {UserInterface} from '../../../user/interfaces/user-interface';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {LikeType} from '../../interfaces/like-type';

@Component({
  selector: 'app-match-buttons',
  templateUrl: './match-buttons.component.html',
  styleUrls: ['./match-buttons.component.scss']
})
export class MatchButtonsComponent implements OnInit {

  @Input() currentPotentialMatch!: UserInterface | any;
  @Output() buttonClick: EventEmitter<boolean>;
  likeType = LikeType;

  constructor(private matchService: MatchService,
              private authService: AuthenticationService) {
    this.buttonClick = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  onLike(type: string): void {
    if (this.currentPotentialMatch === undefined) {
      console.log('no user selected');
      this.buttonClick.emit(false);
    }
    const currentPotentialMatch = this.currentPotentialMatch;

    const user_id = parseInt(JSON.parse(this.authService.getLocalUser()?.id || '{}'), 10);
    const user_id_of_liked_user = parseInt(currentPotentialMatch.id, 10);

    const like = {user_id, user_id_of_liked_user, type};

    this.matchService.postLike(like).subscribe(response => {
    });

    this.buttonClick.emit(true);
  }
}
