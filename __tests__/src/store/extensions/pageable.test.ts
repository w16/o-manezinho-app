import { Pageable } from 'store';

describe('Pageable', () => {
  let pageable: Pageable;
  let onRequest: () => Promise<void>;

  beforeEach(() => {
    onRequest = jest.fn();
    pageable = new Pageable(onRequest);
  });

  it('new Instance: Should create a pageable', () => {
    expect(pageable).toBeTruthy();
  });

  it('fetch: Should call onRequest one time', () => {
    pageable.fetch();
    expect(onRequest).toBeCalledTimes(1);
  });

  it('refresh: Shoudl call onRequest one time', () => {
    pageable.refresh();
    expect(onRequest).toBeCalledTimes(1);
  });

  it('fetch: Should move to next page', () => {
    pageable.fetch();
    expect(pageable.page).toBe(1);
  });

  it('reset: Should reset to initial state', async () => {
    expect(pageable.status).toBe('idle');

    await pageable.fetch();

    expect(pageable.status).toBe('done');

    await pageable.fetch();

    expect(onRequest).toBeCalledTimes(2);

    expect(pageable.page).toBe(2);

    pageable.reset();

    expect(pageable.page).toBe(0);
  });
});
