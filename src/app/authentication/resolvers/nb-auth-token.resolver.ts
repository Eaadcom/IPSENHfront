import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {NbAuthService, NbAuthToken} from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class NbAuthTokenResolver implements Resolve<NbAuthToken> {

  constructor(private authService: NbAuthService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NbAuthToken> {
    return this.authService.getToken();
  }
}
