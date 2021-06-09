import {Component, OnInit} from '@angular/core';
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

  potentialMatches: number[] = [];
  currentPotentialMatch = {} as User;
  codesnippet = {} as Codesnippet;
  currentUserHasCodesnippets = true;
  cardFlipped = false;
  loading = true;
  codesnippetDarkTheme = false;
  hasMatches = true;

  constructor(private matchService: MatchService,
              private authService: AuthenticationService,
              private codesnippetService: CodesnippetService) {
  }

  ngOnInit(): void {
    this.checkIfCurrentUserHasCodesnippets();
    this.getMorePotentialMatches();
  }

  getMorePotentialMatches(): void {
    const user_id = this.authService.getLocalUser()?.id;
    this.matchService.getPotentialMatches(user_id).subscribe((response => {
      this.potentialMatches = response;
      this.getUserInfoOfPotentialMatch();
    }));
  }

  getUserInfoOfPotentialMatch(): void {
    if (this.areTherePotentialMatches()) {
      this.loading = true;
      this.matchService.getUserInfo(this.potentialMatches[0]).subscribe((response => {
        this.currentPotentialMatch = response;
        this.getCodeSnippetsOfPotentialMatch();
      }));
    }
  }

  getCodeSnippetsOfPotentialMatch(): void {
    this.codesnippetService.getCodesnippetsByUserId(
      this.currentPotentialMatch.id).subscribe((response => {
        this.codesnippet = response[0];
        this.getCodesnippetTheme();
        this.loading = false;
    }));
  }

  checkIfCurrentUserHasCodesnippets(): void{
    const user_id = this.authService.getLocalUser()?.id;
    this.codesnippetService.getCodesnippetsByUserId(user_id)
      .subscribe((response => {
      if ( response.length === 0 ) {
        this.currentUserHasCodesnippets = false;
      }
    }));
  }

  getCodesnippetTheme(): void {
    this.codesnippetDarkTheme = this.codesnippet.theme === 'dark';
  }

  getNameOfPotentialMatch(): string {
    return this.currentPotentialMatch.first_name + ' '
      + this.currentPotentialMatch.middle_name + ' '
      + this.currentPotentialMatch.last_name;
  }

  getFirstLetterOfPotentialMatchName(): string {
    let nameFirstLetter = 'A';
    if (this.currentPotentialMatch.first_name !== undefined){
      nameFirstLetter = this.currentPotentialMatch.first_name[0].toUpperCase();
    }
    return nameFirstLetter;
  }

  areTherePotentialMatches(): boolean {
    if (this.potentialMatches.length !== 0){
      return true;
    } else {
      this.hasMatches = false;
      this.loading = false;
      return false;
    }
  }

  nextPotentialMatch(): void {
    this.potentialMatches.shift();
    this.getUserInfoOfPotentialMatch();
  }

  onButtonClick($event: boolean): void {
    this.nextPotentialMatch();
  }

  flipCard(): void {
    this.cardFlipped = !this.cardFlipped;
  }
}
