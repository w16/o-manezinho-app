import { User } from './user';

export class UserBuilder {
  private _id = '';

  private _name = '';

  private _likes: string[] = [];

  private _dislikes: string[] = [];

  id(id: string): UserBuilder {
    this._id = id;

    return this;
  }

  name(name: string): UserBuilder {
    this._name = name;

    return this;
  }

  likes(likes: string[]): UserBuilder {
    this._likes = likes;

    return this;
  }

  dislikes(dislikes: string[]): UserBuilder {
    this._dislikes = dislikes;

    return this;
  }

  build(): User {
    return new User(this._id, this._name, this._likes, this._dislikes);
  }
}
