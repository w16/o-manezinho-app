import { toJS } from 'mobx';
import { User } from 'store';

describe('User', () => {
  it('new instance: Should create a new User', () => {
    expect(
      toJS(new User('1', 'John Doe', ['hamburger'], ['funk']))
    ).toStrictEqual({
      id: '1',
      name: 'John Doe',
      likes: ['hamburger'],
      dislikes: ['funk'],
    });
  });
});
