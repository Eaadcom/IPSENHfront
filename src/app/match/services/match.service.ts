import {Observable} from 'rxjs';
import {ApiService} from '../../core/services/api.service';
import {Injectable} from '@angular/core';
import {User} from '../../user/models/user';
import {Like} from '../models/like';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private readonly userEndpoint;
  private readonly likeEndpoint;
  private readonly codesnippetEndpoint;

  constructor(private api: ApiService) {
    this.userEndpoint = 'v1/user';
    this.likeEndpoint = 'v1/like';
    this.codesnippetEndpoint = 'v1/codesnippet';
  }

  getPotentialMatches(userId: number): Observable<Array<number>> {
    return this.api.get(`${this.userEndpoint}/potentialmatches/${userId}`);
  }

  getUserInfo(userId: number): Observable<User> {
    return this.api.get(`${this.userEndpoint}/${userId}`);
  }

  postLike(like: Like): Observable<Like>{
    return this.api.post(`${this.likeEndpoint}`, like);
  }
}
