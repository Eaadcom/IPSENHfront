import {TestBed} from '@angular/core/testing';

import {AuthTokenResolver} from '../../../src/app/authentication/resolvers/auth-token-resolver.service';
import {AuthenticationModule} from '../../../src/app/authentication/authentication.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';
import {NbAuthService} from '@nebular/auth';
import {AppTestingModule} from '../../app/app-testing.module';

describe('AuthTokenResolver', () => {
  let resolver: AuthTokenResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule]
    });
    resolver = TestBed.inject(AuthTokenResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
