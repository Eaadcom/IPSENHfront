import { Component, OnInit } from '@angular/core';
import {MatchService} from '../../services/match.service';
import {User} from '../../../user/models/user';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {Codesnippet} from '../../../codesnippet/models/codesnippet.model';
import {CodesnippetService} from '../../../codesnippet/services/codesnippet.service';

@Component({
  selector: 'app-potential-match-info',
  templateUrl: './potential-match-info.component.html',
  styleUrls: ['./potential-match-info.component.scss']
})
export class PotentialMatchInfoComponent implements OnInit {

  potentialMatches: any;
  currentPotentialMatch = {} as User;
  codesnippet = {} as Codesnippet;
  cardFlipped = false;

  constructor(private matchService: MatchService,
              private authService: AuthenticationService,
              private codesnippetService: CodesnippetService) {
    this.getMorePotentialMatches();
  }

  ngOnInit(): void {
  }

  getCodeSnippetsOfPotentialMatch(): void {
    this.codesnippetService.getCodesnippetsByUserId(
      this.currentPotentialMatch.id).subscribe((response => {
        this.codesnippet = response[0];
    }));
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
      this.getUserInfoOfPotentialMatch();
    }));
  }

  getUserInfoOfPotentialMatch(): void{
    this.matchService.getUserInfo(this.potentialMatches[0]).subscribe((response => {
      this.currentPotentialMatch = response;
      this.getCodeSnippetsOfPotentialMatch();
    }));
  }

  getAgeOfPotentialMatch(): string {
    const timeDiff = Math.abs(Date.now() - new Date(this.currentPotentialMatch.date_of_birth).getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return `${age} years old`;
  }

  getNameOfPotentialMatch(): string {
    return this.currentPotentialMatch.first_name + ' '
      + this.currentPotentialMatch.middle_name + ' '
    + this.currentPotentialMatch.last_name;
  }

  getFirstLetterOfPotentialMatchName(): string {
    return this.currentPotentialMatch.first_name[0];
  }

  onButtonClick($event: boolean): void {
    this.nextPotentialMatch();
  }

  flipCard(): void {
    this.cardFlipped = !this.cardFlipped;
  }
}
