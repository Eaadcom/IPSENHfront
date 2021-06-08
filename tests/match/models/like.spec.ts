import {Like} from '../../../src/app/match/models/like';
import {LikeType} from '../../../src/app/match/interfaces/like-type';

describe('Like', () => {
  it('should create an instance ', () => {
    const like = new Like(0, 0, LikeType.LIKE);
    expect(like).toBeTruthy();
  });
});
