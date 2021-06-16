import {Injectable} from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {NbTokenStorage} from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate, CanActivateChild {

  constructor(private tokenStorage: NbTokenStorage,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivateChild(route, state);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.hasToken() ? true : this.router.parseUrl('/login');
  }

  hasToken(): boolean {
    return this.tokenStorage.get().getPayload() !== null;
  }
}
