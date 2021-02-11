/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useStore } from 'hooks/use-store';
import { RootStore } from 'store';

interface WithStoreProps {
  store: RootStore;
}

export function withStore<T extends WithStoreProps = WithStoreProps>(
  WrappedComponent: React.ComponentType<T>
): React.ReactNode {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithStore = (props: Omit<T, keyof WithStoreProps>) => {
    // Fetch the props you want to inject. This could be done with context instead.
    const store = useStore();

    // props comes afterwards so the can override the default ones.
    return <WrappedComponent {...(props as T)} store={store} />;
  };

  ComponentWithStore.displayName = `withTheme(${displayName})`;

  return ComponentWithStore;
}
