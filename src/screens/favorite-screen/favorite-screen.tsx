import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from 'navigation';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

type FavoriteScreenRouteProp = RouteProp<RootTabParamList, 'Favorite'>;

type FavoriteScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Favorite'
>;

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  route: FavoriteScreenRouteProp;
  // eslint-disable-next-line react/no-unused-prop-types
  navigation: FavoriteScreenNavigationProp;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FavoriteScreen(props: Props): JSX.Element {
  return (
    <View style={tailwind('flex-1 bg-purple-500')}>
      <Text>FavoriteScreen</Text>
    </View>
  );
}
