import * as React from 'react';
import { RootStore } from 'store';
import { StoreContext } from 'providers';

/* Hook to use store in any functional component */
export const useStore = (): RootStore => React.useContext(StoreContext);
