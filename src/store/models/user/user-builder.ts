import { User } from 'store';

export class UserBuilder {
  private _id: string = '';

  private _name: string = '';

  private _likes: string[] = [];

  private _dislikes: string[] = [];

  id(id: string) {
    this._id = id;

    return this;
  }

  name(name: string) {
    this._name = name;

    return this;
  }

  likes(likes: string[]) {
    this._likes = likes;

    return this;
  }

  dislikes(dislikes: string[]) {
    this._dislikes = dislikes;

    return this;
  }

  build() {
    return new User(this._id, this._name, this._likes, this._dislikes);
  }
}
