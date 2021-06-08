import { Injectable } from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs';
import {LikeMatchResponse} from '../models/like-match-response.model';

@Injectable({
  providedIn: 'root'
})
export class LikeMatchService {

  private resourcePath = 'v1/like-match';

  constructor(private apiService: ApiService) { }

  getById(id: number): Observable<LikeMatchResponse> {
    return this.apiService.get<LikeMatchResponse>(this.resourcePath + `/${id}`);
  }

  getOfAuthUser(): Observable<LikeMatchResponse[]> {
    return this.apiService.get<LikeMatchResponse[]>(this.resourcePath);
  }

  deleteById(id: number): Observable<any> {
    return this.apiService.delete(this.resourcePath + `/${id}`);
  }
}
