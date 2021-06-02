import { TestBed } from '@angular/core/testing';

import { LikeMatchService } from './like-match.service';
import {environment} from '../../../environments/environment';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('LikeMatchService', () => {
  let service: LikeMatchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LikeMatchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute GET when getting likeMatch by id', () => {
    const id = 1;

    service.getById(id).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/like-match/${id}`);
    expect(req.request.method).toBe('GET');
  });

  it('should execute GET when getting likeMatches of authenticated user', () => {
    service.getOfAuthUser().subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/like-match`);
    expect(req.request.method).toBe('GET');
  });

  it('should execute DELETE when deleting likeMatch by id', () => {
    const id = 1;

    service.deleteById(id).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/like-match/${id}`);
    expect(req.request.method).toBe('DELETE');
  });
});
