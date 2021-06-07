import {Message} from './message.model';

describe('Message', () => {

  let message: Message;

  beforeEach(() => {
    message = new Message('', '');
  });

  it('should create an instance', () => {
    expect(message).toBeTruthy();
  });

  it('created object should be an instance of Message', () => {
    expect(message).toBeInstanceOf(Message);
  });
});

