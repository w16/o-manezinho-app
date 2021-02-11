import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from 'navigation';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

type ProfileScreenRouteProp = RouteProp<RootTabParamList, 'Profile'>;

type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Profile'
>;

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  route: ProfileScreenRouteProp;
  // eslint-disable-next-line react/no-unused-prop-types
  navigation: ProfileScreenNavigationProp;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ProfileScreen(props: Props): JSX.Element {
  return (
    <View style={tailwind('flex-1 bg-red-500')}>
      <Text>ProfileScreen</Text>
    </View>
  );
}
