import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { StoreProvider } from 'providers';
import { createRootStore } from 'store';
import { navigationRef } from 'services/navigation-service';
import { TabNavigation } from 'navigation';

enableScreens();

const store = createRootStore();

export function App(): React.ReactNode {
  return (
    <StoreProvider store={store}>
      <NavigationContainer ref={navigationRef}>
        <TabNavigation />
      </NavigationContainer>
    </StoreProvider>
  );
}
