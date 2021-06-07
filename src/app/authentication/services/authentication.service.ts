import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {NbTokenStorage} from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly endpoint;

  constructor(private api: ApiService, private tokenService: NbTokenStorage) {
    this.endpoint = 'auth';
  }

  getLocalUser(): any {
    return this.tokenService.get().getPayload();
  }
}
