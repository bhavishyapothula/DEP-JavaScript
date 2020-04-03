import { PassiveUserPipe } from './passive-user.pipe';

describe('PassiveUserPipe', () => {
  it('create an instance', () => {
    const pipe = new PassiveUserPipe();
    expect(pipe).toBeTruthy();
  });
});
