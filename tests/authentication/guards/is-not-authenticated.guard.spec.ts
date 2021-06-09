import {TestBed} from '@angular/core/testing';

import {IsNotAuthenticatedGuard} from '../../../src/app/authentication/guards/is-not-authenticated.guard';
import {AppTestingModule} from '../../app/app-testing.module';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';

describe('IsNotAuthenticatedGuard', () => {
  let guard: IsNotAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
    });
    guard = TestBed.inject(IsNotAuthenticatedGuard);

  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true when user is not authenticated', () => {
    spyOn(guard, 'hasToken').and.returnValue(true);

    const res = guard.canActivate({} as ActivatedRouteSnapshot, fakeRouterState('test'));
    expect(res).toBeTrue();
  });

  it('should return urlTree when user is authenticated', () => {
    spyOn(guard, 'hasToken').and.returnValue(false);

    const res = guard.canActivate({} as ActivatedRouteSnapshot, fakeRouterState('test'));

    expect(res).toBeInstanceOf(UrlTree);
  });

  const fakeRouterState = (url: string): RouterStateSnapshot => ({
    url,
  } as RouterStateSnapshot);
});
