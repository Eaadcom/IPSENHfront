import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {Like} from '../../models/like';
import {UserInterface} from '../../../user/interfaces/user-interface';

@Component({
  selector: 'app-match-buttons',
  templateUrl: './match-buttons.component.html',
  styleUrls: ['./match-buttons.component.scss']
})
export class MatchButtonsComponent implements OnInit {

  @Input() currentPotentialMatch!: UserInterface | any;
  @Output() buttonClick: EventEmitter<boolean>;

  constructor(private matchService: MatchService) {
    this.buttonClick = new EventEmitter<boolean>();
  }


  ngOnInit(): void {
  }

  onLike(type: string): void {
    if (this.currentPotentialMatch === undefined) {
      console.log('no user selected');
      this.buttonClick.emit(false);
    }
    const currentPotentialMatch = this.currentPotentialMatch; // this.potentialMatchInfoComponent.getCurrentPotentialMatch();

    const user_id = parseInt(JSON.parse(localStorage.getItem('user') || '{}').id, 10); // use auth service
    const user_id_of_liked_user = parseInt(currentPotentialMatch.id, 10);

    const like = new Like(user_id, user_id_of_liked_user, type);

    // this.matchService.postLike(like).subscribe(response => {
    //   this.potentialMatchInfoComponent.nextPotentialMatch();
    // });

    this.buttonClick.emit(true);

  }
}
