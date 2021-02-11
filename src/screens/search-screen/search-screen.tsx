import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from 'navigation';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

type SearchScreenRouteProp = RouteProp<RootTabParamList, 'Search'>;

type SearchScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Search'
>;

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  route: SearchScreenRouteProp;
  // eslint-disable-next-line react/no-unused-prop-types
  navigation: SearchScreenNavigationProp;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SearchScreen(props: Props): JSX.Element {
  return (
    <View style={tailwind('flex-1 bg-green-500')}>
      <Text>SearchScreen</Text>
    </View>
  );
}
