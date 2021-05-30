import { Component, OnInit } from '@angular/core';
import {MatchService} from '../../services/match.service';
import {User} from '../../../user/models/user';

@Component({
  selector: 'app-potential-match-info',
  templateUrl: './potential-match-info.component.html',
  styleUrls: ['./potential-match-info.component.scss']
})
export class PotentialMatchInfoComponent implements OnInit {

  potentialMatches: any;
  currentPotentialMatch = {} as User;

  constructor(private matchService: MatchService) {
    this.getMorePotentialMatches();
  }

  ngOnInit(): void {
  }

  nextPotentialMatch(): void{
    this.potentialMatches.shift();
    this.getUserInfoOfPotentialMatch();
    console.log(this.currentPotentialMatch);
  }

  getMorePotentialMatches(): void {
    this.matchService.getPotentialMatches(1).subscribe((response => {
      this.potentialMatches = response;
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

  getCurrentPotentialMatch(): User{
    return this.currentPotentialMatch;
  }
}
