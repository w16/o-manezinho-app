import * as React from 'react';
import { RootStore } from 'store';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  store: RootStore;
};

export const StoreContext = React.createContext<RootStore>(undefined!);

export const StoreProvider = ({ children, store }: Props): JSX.Element => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);
