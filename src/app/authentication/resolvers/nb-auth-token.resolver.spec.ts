import { TestBed } from '@angular/core/testing';

import { NbAuthTokenResolver } from './nb-auth-token.resolver';

describe('NbAuthTokenResolver', () => {
  let resolver: NbAuthTokenResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NbAuthTokenResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
