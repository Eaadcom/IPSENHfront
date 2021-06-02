import {Like} from './like';
import {LikeType} from '../interfaces/like-type';

describe('Like', () => {
  it('should create an instance', () => {
    const like = new Like(0, 0, LikeType.LIKE);
    expect(like).toBeTruthy();
  });
});
