import {User} from '../../../src/app/user/models/user';

describe('User', () => {

  it('should create an instance', () => {
    const user = new User(
      0, '', '', '', '', '', '',
      '', new Date(), '', 1, 2, 25, '', new Date(), new Date()
    );
    expect(user).toBeTruthy();
  });

});
