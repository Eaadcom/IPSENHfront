import {User} from './user';

describe('User', () => {

  it('should create an instance', () => {
    const user = new User(
      '', '', '', '', '', '', '',
      '', new Date(), '', 1, 2, '', '', new Date(), new Date()
    );
    expect(user).toBeTruthy();
  });

});
