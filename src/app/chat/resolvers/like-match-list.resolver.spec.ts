import { TestBed } from '@angular/core/testing';

import { LikeMatchListResolver } from './like-match-list.resolver';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LikeMatchListResolver', () => {
  let resolver: LikeMatchListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LikeMatchListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
