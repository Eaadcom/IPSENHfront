import {Message} from './message.model';

describe('Message', () => {

  it('should create an instance', () => {
    const message = new Message(
      '', '', '', '', new Date(), new Date()
    );
    expect(message).toBeTruthy();
  });
});

