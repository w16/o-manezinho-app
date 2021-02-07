import { toJS } from 'mobx';
import { User, UserBuilder } from 'store';

describe('UserBuilder', () => {
  it('Should return an instance of User', () => {
    expect(new UserBuilder().build()).toBeInstanceOf(User);
  });

  it('Should create a user with id and name', () => {
    expect(
      toJS(new UserBuilder().id('1').name('John Doe').build())
    ).toStrictEqual({
      id: '1',
      name: 'John Doe',
      likes: [],
      dislikes: [],
    });
  });
});
