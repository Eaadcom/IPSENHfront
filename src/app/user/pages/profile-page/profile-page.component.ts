import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Codesnippet} from '../../../codesnippet/models/codesnippet.model';
import {UserInterface} from '../../interfaces/user-interface';
import parse from 'date-fns/parse';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.setUserFromRoute();
  }

  getUserCodesnippets(): Codesnippet[] {
    return this.activatedRoute.snapshot.data.codesnippets;
  }

  getAuthUser(): UserInterface {
    return this.user;
  }

  protected convertUserDateOfBirthToDateObject(user: any): void {
    user.date_of_birth = parse(user.date_of_birth, 'dd-mm-yyyy', new Date());
  }

  protected addDefaultAboutme(user: any): void {
    if (user.about_me === '') {
      user.about_me = 'Tell something about yourself';
    }
  }

  private setUserFromRoute(): void {
    const user = this.activatedRoute.snapshot.data.authUser;
    this.convertUserDateOfBirthToDateObject(user);
    this.addDefaultAboutme(user);
    this.user = user;
  }
}
