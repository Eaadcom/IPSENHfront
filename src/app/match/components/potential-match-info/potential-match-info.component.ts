import { Component, OnInit } from '@angular/core';
import {MatchService} from '../../services/match.service';
import {User} from '../../../user/models/user';
import {AuthenticationService} from '../../../authentication/services/authentication.service';

@Component({
  selector: 'app-potential-match-info',
  templateUrl: './potential-match-info.component.html',
  styleUrls: ['./potential-match-info.component.scss']
})
export class PotentialMatchInfoComponent implements OnInit {

  potentialMatches: any;
  currentPotentialMatch = {} as User;

  constructor(private matchService: MatchService,
              private authService: AuthenticationService) {
    this.getMorePotentialMatches();
  }

  ngOnInit(): void {
  }

  nextPotentialMatch(): void{
    if (this.potentialMatches.length === 1){
      console.log('Will run out of matches');
    }
    this.potentialMatches.shift();
    this.getUserInfoOfPotentialMatch();
  }

  getMorePotentialMatches(): void {
    const user_id = this.authService.getLocalUser()?.id;
    this.matchService.getPotentialMatches(user_id).subscribe((response => {
      this.potentialMatches = response;
      console.log(this.potentialMatches);
      this.getUserInfoOfPotentialMatch();
    }));
  }

  getUserInfoOfPotentialMatch(): void{
    this.matchService.getUserInfo(this.potentialMatches[0]).subscribe((response => {
      this.currentPotentialMatch = response[0];
    }));
  }

  getAgeOfPotentialMatch(): string {
    const timeDiff = Math.abs(Date.now() - new Date(this.currentPotentialMatch.date_of_birth).getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return `${age} years old`;
  }

  onButtonClick($event: boolean): void {
    this.nextPotentialMatch();
  }
}
