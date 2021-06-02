import { Injectable } from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Message} from '../models/message.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private resourceLikeMatchPath = 'v1/like-match/';
  private resourceMessagePath = '/message';

  constructor(private apiService: ApiService) { }

  create(message: Message): Observable<any> {
    return this.apiService.post(
      `${this.resourceLikeMatchPath}${message.like_match_id}${this.resourceMessagePath}`,
      message);
  }
}
