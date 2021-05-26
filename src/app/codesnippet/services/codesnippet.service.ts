import { Injectable } from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {Codesnippet} from '../models/codesnippet.model';

@Injectable({
  providedIn: 'root'
})
export class CodesnippetService {


  private resourcePath = '/codesnippet';
  constructor(private apiService: ApiService) { }


  getCodesnippetsByUserId(userId: number): Observable<Codesnippet[]> {
    return this.apiService.get<Codesnippet[]>(this.resourcePath + '/' + userId);
  }

  getCodesnippetsByAuthenticatedUser(): Observable<Codesnippet[]> {
    return this.apiService.get<Codesnippet[]>(this.resourcePath);
  }

  addCodesnippet(codesnippet: Codesnippet): Observable<HttpResponse<any>>{
    return this.apiService.post(this.resourcePath, codesnippet);
  }

  deleteCodesnippet(codesnippetId: number): Observable<HttpResponse<any>>{
    return this.apiService.delete(this.resourcePath + '/' + codesnippetId);
  }

  updateUser(codesnippetId: number, codesnippet: Codesnippet): Observable<HttpResponse<any>> {
    return this.apiService.post(this.resourcePath + '/' + codesnippetId, codesnippet);
  }

}
