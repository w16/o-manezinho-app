import { action, computed, makeObservable, observable } from 'mobx';

export type StatusType = 'idle' | 'refreshing' | 'pending' | 'done' | 'error';

export class Status {
  status: StatusType = 'idle';

  constructor() {
    makeObservable(this, {
      status: observable,
      setStatus: action,
      isDone: computed,
      isError: computed,
      isIdle: computed,
      isPending: computed,
      isRefreshing: computed,
    });
  }

  setStatus(status: StatusType): void {
    this.status = status;
  }

  get isIdle(): boolean {
    return this.status === 'idle';
  }

  get isPending(): boolean {
    return this.status === 'pending';
  }

  get isDone(): boolean {
    return this.status === 'done';
  }

  get isError(): boolean {
    return this.status === 'error';
  }

  get isRefreshing(): boolean {
    return this.status === 'refreshing';
  }
}
