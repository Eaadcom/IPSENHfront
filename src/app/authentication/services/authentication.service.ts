import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {NbTokenStorage} from '@nebular/auth';
import {Observable} from 'rxjs';
import {UserInterface} from '../../user/interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly endpoint;

  constructor(private api: ApiService, private tokenService: NbTokenStorage) {
    this.endpoint = 'auth';
  }

  fetchAuthUser(): Observable<UserInterface> {
    return this.api.get(`${this.endpoint}/user`);
  }

  getLocalUser(): any {
    return this.tokenService.get().getPayload();
  }

}
