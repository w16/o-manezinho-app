import { makeObservable, observable } from 'mobx';
import { Status } from './status';

type OnRequest = (page: number, perPage: number) => Promise<void>;

export class Pageable extends Status {
  page = 0;

  perPage = 10;

  total = 0;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  onRequest: OnRequest = () => undefined;

  constructor(onRequest: OnRequest) {
    super();
    makeObservable(this, {
      page: observable,
      perPage: observable,
      total: observable,
      onRequest: observable,
    });

    this.onRequest = onRequest;
  }

  setTotal(total: number): void {
    if (total >= 0) this.total = total;
  }

  reset(): void {
    this.page = 0;
    this.perPage = 10;
    this.total = 0;
    this.setStatus('idle');
  }

  async refresh(): Promise<void> {
    /* Block new request while one is executing */
    if (this.isRefreshing || this.isPending) return;
    this.setStatus('refreshing');
    await this.fetch(0, this.perPage);
  }

  async fetch(page?: number, perPage?: number): Promise<void> {
    try {
      /* Block new request while one is executing */
      if (this.isPending) return;

      if (!this.isRefreshing) this.setStatus('pending');

      const _page = (page != null && page >= 0 ? page : this.page) + 1;
      const _perPage = perPage != null && perPage >= 1 ? perPage : this.perPage;

      this.page = _page;
      this.perPage = _perPage;

      await this.onRequest(this.page, this.perPage);

      this.setStatus('done');
    } catch (ex) {
      console.log(ex);
      this.setStatus('error');
    }
  }

  get hasNext(): boolean {
    return this.page === 0 || this.page * this.perPage < this.total;
  }
}
