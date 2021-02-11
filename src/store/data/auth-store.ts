import AsyncStorage from '@react-native-async-storage/async-storage';
import { computed, flow, makeObservable, observable } from 'mobx';
import { Status } from 'store/extensions';
import { User } from 'store/models';

import { name } from '../../../app.json';

const BASE = 'user';

export class AuthStore extends Status {
  user?: User = undefined;

  token?: string = undefined;

  constructor() {
    super();

    makeObservable(this, {
      user: observable,
      token: observable,
      isAuth: computed,
      authenticate: flow,
      tokenAuthentication: flow,
    });
  }

  get isAuth(): boolean {
    return this.user != null && this.token != null;
  }

  *authenticate() {
    try {
      this.setStatus('pending');
      const user = null;
      yield new Promise((res) => setTimeout(res, 0));

      if (user == null) throw new Error('Something went wrong');

      yield AsyncStorage.setItem(`${name}/${BASE}`, JSON.stringify(user));
      this.setStatus('done');
    } catch (ex) {
      console.error('Authentication error', ex);
      this.setStatus('error');
    }
  }

  *tokenAuthentication() {
    try {
      this.setStatus('pending');
      const user = null;
      yield new Promise((res) => setTimeout(res, 0));

      if (user == null) throw new Error('Something went wrong');

      yield AsyncStorage.setItem(`${name}/${BASE}`, JSON.stringify(user));
      this.setStatus('done');
    } catch (ex) {
      console.error('Authentication error', ex);
      this.setStatus('error');
    }
  }
}
