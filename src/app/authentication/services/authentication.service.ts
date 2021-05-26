import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Credentials} from '../interface/credentials';
import {Observable} from 'rxjs';
import {LoginResponse} from '../interface/login-response';
import {UserInterface} from '../../user/interfaces/user-interface';
import {RegisterResponse} from '../interface/register-response';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly endpoint;

  constructor(private api: ApiService) {
    this.endpoint = 'auth';
  }

  login(credentials: Credentials): Observable<LoginResponse> {

    return this.api
      .post<LoginResponse>(`${this.endpoint}/login`, credentials)
      .pipe(tap(res => {
        localStorage.setItem('api_token', res.api_token);
        localStorage.setItem('user', JSON.stringify(res.user));
      }));
  }

  register(user: UserInterface): Observable<RegisterResponse> {
    return this.api.post(`${this.endpoint}/register`, user);
  }

  getLocalUser(): UserInterface | null {
    return JSON.parse(localStorage.getItem('user') as string) as UserInterface | null;
  }

  getApiToken(): string | null {
    return localStorage.getItem('api_token');
  }
}
