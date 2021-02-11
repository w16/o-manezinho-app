import { wrapRoot } from 'mobx-easy';

import { RootStore } from 'store';

export type ENV = Record<string, unknown>;

export function createRootStore(): RootStore {
  const env: ENV = {};

  return wrapRoot({ RootStore, env });
}
