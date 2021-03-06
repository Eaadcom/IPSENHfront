import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {UserInterface} from '../interfaces/user-interface';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly endpoint: string;

  constructor(private api: ApiService) {
    this.endpoint = 'v1/user';
  }

  update(user: UserInterface): Observable<HttpResponse<UserInterface>> {
    return this.api.put(this.endpoint, user);
  }
}
