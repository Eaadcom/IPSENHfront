import { TestBed } from '@angular/core/testing';

import { AuthUserResolver } from './auth-user.resolver';

describe('AuthUserResolver', () => {
  let resolver: AuthUserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AuthUserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
