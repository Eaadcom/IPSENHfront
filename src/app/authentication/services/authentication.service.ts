import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Credentials} from '../interface/credentials';
import {Observable} from 'rxjs';
import {LoginResponse} from '../interface/login-response';
import {UserInterface} from '../../user/interfaces/user-interface';
import {RegisterResponse} from '../interface/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly endpoint;

  constructor(private api: ApiService) {
    this.endpoint = 'auth/';
  }

  login(credentials: Credentials): Observable<LoginResponse> {
    return this.api.post(`${this.endpoint}/login`, credentials);
  }

  register(user: UserInterface): Observable<RegisterResponse> {
    return this.api.post(`${this.endpoint}/register`, user);
  }

}
