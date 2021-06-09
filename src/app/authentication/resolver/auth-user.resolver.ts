import {Injectable} from '@angular/core';

import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {UserInterface} from '../../user/interfaces/user-interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserResolver implements Resolve<UserInterface> {

  constructor(private authService: AuthenticationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface> {
    return this.authService.fetchAuthUser();
  }
}
