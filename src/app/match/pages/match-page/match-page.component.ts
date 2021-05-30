import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import {Observable, Subscription} from 'rxjs';
import {RegisterResponse} from '../../../authentication/interface/register-response';
import { LoginResponse } from 'src/app/authentication/interface/login-response';
import {tap} from 'rxjs/operators';
import {MatchService} from '../../services/match.service';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
