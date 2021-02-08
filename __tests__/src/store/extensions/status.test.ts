import { Status } from 'store';

describe('Status', () => {
  it('setState: Should change initial state to selected state', () => {
    const status = new Status();

    expect(status.isIdle).toBe(true);
    status.setStatus('done');
    expect(status.isDone).toBe(true);
  });
});
