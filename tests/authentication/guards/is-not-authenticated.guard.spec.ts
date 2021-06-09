import { TestBed } from '@angular/core/testing';

import { IsNotAuthenticatedGuard } from '../../../src/app/authentication/guards/is-not-authenticated.guard';
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

  it('should return UrlTree instance when user is not authenticated', () => {
    const res = guard.canActivate({} as ActivatedRouteSnapshot, fakeRouterState('test'));
    expect(res).toBeInstanceOf(UrlTree);
  });

  const fakeRouterState = (url: string): RouterStateSnapshot => ({
    url,
  } as RouterStateSnapshot);
});
