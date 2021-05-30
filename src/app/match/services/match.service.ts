import {Observable} from 'rxjs';
import {RegisterResponse} from '../../authentication/interface/register-response';
import {ApiService} from '../../core/services/api.service';
import {Injectable} from '@angular/core';
import {User} from '../../user/models/user';
import {Like} from '../models/like';
import {HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private readonly userEndpoint;
  private readonly likeEndpoint;

  constructor(private api: ApiService) {
    this.userEndpoint = 'v1/user';
    this.likeEndpoint = 'v1/like';
  }

  getPotentialMatches(userId: number): Observable<RegisterResponse> {
    return this.api.get(`${this.userEndpoint}/potentialmatches/${userId}`);
  }

  getUserInfo(userId: number): Observable<Array<User>> {
    return this.api.get(`${this.userEndpoint}/${userId}`);
  }

  postLike(like: Like): Observable<HttpResponse<any>>{
    return this.api.post(`${this.likeEndpoint}`, like);
  }
}
