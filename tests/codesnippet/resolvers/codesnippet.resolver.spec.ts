import { TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CodesnippetResolver} from '../../../src/app/codesnippet/resolver/codesnippet.resolver';

describe('CodesnippetResolver', () => {
  let resolver: CodesnippetResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CodesnippetResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
