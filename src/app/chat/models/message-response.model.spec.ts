import { MessageResponse } from './message-response.model';
import {LikeMatchResponse} from './like-match-response.model';

describe('MessageResponse', () => {

  it('should create an instance', () => {
    expect(new MessageResponse()).toBeTruthy();
  });

  it('created object should be an instance of MessageResponse', () => {
    expect(new MessageResponse()).toBeInstanceOf(MessageResponse);
  });
});
