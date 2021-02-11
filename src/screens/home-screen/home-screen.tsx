import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from 'navigation';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

type HomeScreenRouteProp = RouteProp<RootTabParamList, 'Home'>;

type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Home'
>;

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  route: HomeScreenRouteProp;
  // eslint-disable-next-line react/no-unused-prop-types
  navigation: HomeScreenNavigationProp;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen(props: Props): JSX.Element {
  return (
    <View style={tailwind('flex-1 bg-blue-500')}>
      <Text>HomeScreen</Text>
    </View>
  );
}
