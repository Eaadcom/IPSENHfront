import {Codesnippet} from '../../../src/app/codesnippet/models/codesnippet.model';

describe('Codesnippet', () => {

  let codesnippet: Codesnippet;

  beforeEach(() => {
    codesnippet = new Codesnippet(null as any, null as any, '', '', '', null as any, null as any);
  });

  it('should create an instance', () => {
    expect(codesnippet).toBeTruthy();
  });

  it('created object should be an instance of Codesnippet', () => {
    expect(codesnippet).toBeInstanceOf(Codesnippet);
  });
});
