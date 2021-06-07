import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {MatchService} from '../../../src/app/match/services/match.service';
import {LikeType} from '../../../src/app/match/interfaces/like-type';
import {environment} from '../../../src/environments/environment';

describe('Match.Service', () => {
  let service: MatchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MatchService);

  });

  it('should create an instance', () => {

    expect(service).toBeTruthy();
  });

  it('should execute POST request when liking', () => {

    const like = {
      user_id: 1,
      user_id_of_liked_user: 2,
      type: LikeType.LIKE
    };

    service.postLike(like).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + 'v1/like');
    expect(req.request.method).toBe('POST');
  });

  it('should execute GET request retrieving potential matches', () => {

    const userId = 1;

    service.getPotentialMatches(userId).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/user/potentialmatches/${userId}`);
    expect(req.request.method).toBe('GET');
  });

  it('should execute GET request retrieving user info', () => {

    const userId = 1;

    service.getUserInfo(userId).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/user/${userId}`);
    expect(req.request.method).toBe('GET');
  });

  it('should send a like', () => {

    const like = {
      user_id: 1,
      user_id_of_liked_user: 2,
      type: LikeType.DISLIKE
    };

    service.postLike(like).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + 'v1/like');
    expect(req.request.body).toBe(like);
  });
});
