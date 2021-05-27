import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import {Observable} from 'rxjs';
import {RegisterResponse} from '../../../authentication/interface/register-response';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit {

  private readonly userEndpoint;
  potentialMatches;

  constructor(private api: ApiService) {
    this.potentialMatches = this.getPotentialMatches(1).subscribe((response => {
      console.log(response);
    }));
    this.userEndpoint = 'user';
  }

  ngOnInit(): void {
  }

  getPotentialMatches(userId: number): Observable<RegisterResponse> {
    return this.api.get(`${this.userEndpoint}/getPotentialMatches/${userId}`);
  }
}
