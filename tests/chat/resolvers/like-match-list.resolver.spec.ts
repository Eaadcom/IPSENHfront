import { TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LikeMatchListResolver} from '../../../src/app/chat/resolvers/like-match-list.resolver';

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
