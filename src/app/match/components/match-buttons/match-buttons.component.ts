import { Component, OnInit } from '@angular/core';
import {MatchService} from '../../services/match.service';
import {Like} from '../../models/like';
import {PotentialMatchInfoComponent} from '../potential-match-info/potential-match-info.component';

@Component({
  selector: 'app-match-buttons',
  templateUrl: './match-buttons.component.html',
  styleUrls: ['./match-buttons.component.scss']
})
export class MatchButtonsComponent implements OnInit {

  constructor(private matchService: MatchService,
              private potentialMatchInfoComponent: PotentialMatchInfoComponent) { }

  ngOnInit(): void {
  }

  onLike(type: string): void {
    const currentPotentialMatch = this.potentialMatchInfoComponent.getCurrentPotentialMatch();

    const user_id = parseInt(JSON.parse(localStorage.getItem('user') || '{}').id, 10);
    const user_id_of_liked_user = parseInt(currentPotentialMatch.id, 10);

    const like = new Like(user_id, user_id_of_liked_user, type);

    this.matchService.postLike(like).subscribe(response => {
      this.potentialMatchInfoComponent.nextPotentialMatch();
    });
  }
}
