import { LikeMatchResponse } from './like-match-response.model';

describe('LikeMatchResponse', () => {

  it('should create an instance', () => {
    expect(new LikeMatchResponse()).toBeTruthy();
  });

  it('created object should be an instance of LikeMatchResponse', () => {
    expect(new LikeMatchResponse()).toBeInstanceOf(LikeMatchResponse);
  });
});
