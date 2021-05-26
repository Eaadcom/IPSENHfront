import {TestBed} from '@angular/core/testing';

import {IsAuthenticatedGuard} from './is-authenticated.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

describe('IsAuthenticatedGuard', () => {
  let guard: IsAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    guard = TestBed.inject(IsAuthenticatedGuard);
    localStorage.clear();
  });


  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('be able to hit route when user is logged in', () => {
    localStorage.setItem('user', JSON.stringify({data: 'test'}));
    localStorage.setItem('api_token', 'token');

    const res = guard.canActivate({} as ActivatedRouteSnapshot, fakeRouterState('test'));
    expect(res).toBeTrue();
  });

  it('not be able to hit route when user is not logged in', () => {
    const res = guard.canActivate({} as ActivatedRouteSnapshot, fakeRouterState('test'));
    expect(res).toBeFalse();
  });

  function fakeRouterState(url: string): RouterStateSnapshot {
    return {
      url,
    } as RouterStateSnapshot;
  }
});
