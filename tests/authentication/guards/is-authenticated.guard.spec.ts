import {TestBed} from '@angular/core/testing';

import {ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {IsAuthenticatedGuard} from '../../../src/app/authentication/guards/is-authenticated.guard';
import {AuthenticationModule} from '../../../src/app/authentication/authentication.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NbAuthService} from '@nebular/auth';
import {AppTestingModule} from '../../app/app-testing.module';


describe('IsAuthenticatedGuard', () => {
  let guard: IsAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
    });

    guard = TestBed.inject(IsAuthenticatedGuard);
  });


  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  xit('be able to hit route when user is logged in', () => {
    const res = guard.canActivate({} as ActivatedRouteSnapshot, fakeRouterState('test'));
    expect(res).toBeTrue();
  });

  xit('not be able to hit route when user is not logged in', () => {
    const res = guard.canActivate({} as ActivatedRouteSnapshot, fakeRouterState('test'));
    expect(res).toBeFalse();
  });

  const fakeRouterState = (url: string): RouterStateSnapshot => ({
    url,
  } as RouterStateSnapshot);

});
