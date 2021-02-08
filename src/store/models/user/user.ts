import { makeObservable, observable } from 'mobx';

export class User {
  id = '';

  name = '';

  likes: string[] = [];

  dislikes: string[] = [];

  constructor(id: string, name: string, likes: string[], dislikes: string[]) {
    makeObservable(this, {
      id: observable,
      name: observable,
      likes: observable,
      dislikes: observable,
    });

    this.id = id;
    this.name = name;
    this.likes = likes;
    this.dislikes = dislikes;
  }
}
