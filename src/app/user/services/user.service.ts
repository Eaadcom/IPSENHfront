import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {UserInterface} from '../interfaces/user-interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly endpoint: string;

  constructor(private api: ApiService) {
    this.endpoint = '/user';
  }

  update(user: UserInterface): Observable<UserInterface> {
    return this.api.put(this.endpoint, user);
  }
}
