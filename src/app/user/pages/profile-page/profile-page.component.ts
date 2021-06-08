import {Component, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ActivatedRoute} from '@angular/router';
import {Codesnippet} from '../../../codesnippet/models/codesnippet.model';
import {UserInterface} from '../../interfaces/user-interface';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  i = 0;
  theme = [
    'corporate',
    'dark',
    'cosmic'
  ];
  selectedTheme = 'dark';
  start = false;

  constructor(private activatedRoute: ActivatedRoute, private themeService: NbThemeService) {
    console.log(this.activatedRoute.snapshot.data);
    console.log(this.getUserCodesnippets());

    this.updateTheme(this.i);
  }

  ngOnInit(): void {
  }

  startLoop(): void {
    this.start = !this.start;
    this.updateTheme(this.i);
  }

  updateTheme(i: any): void {
    if (!this.start) {
      return;
    }
    const self = this;
    if (i > self.theme.length) {
      i = 0;
    }
    // tslint:disable-next-line:variable-name
    this.selectedTheme = self.theme[i];
    setTimeout(() => {
      self.themeService.changeTheme(self.selectedTheme);
      i++;
      self.updateTheme(i++);
    }, 8000);
  }

  getUserCodesnippets(): Codesnippet[] {
    return this.activatedRoute.snapshot.data.codesnippets;
  }

  private getAuthUser(): UserInterface {
    return this.activatedRoute.snapshot.data.user;
  }
}
