import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from 'screens/home-screen';
import { SearchScreen } from 'screens/search-screen';
import { ProfileScreen } from 'screens/profile-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FavoriteScreen } from 'screens/favorite-screen';

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Favorite: undefined;
};
const RootTab = createBottomTabNavigator<RootTabParamList>();

type TabBarIcon = Partial<{
  focused: boolean;
  color: string;
  size: number;
}>;

export function TabNavigation(): JSX.Element {
  return (
    <RootTab.Navigator backBehavior='initialRoute' initialRouteName='Home'>
      <RootTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }: TabBarIcon) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <RootTab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }: TabBarIcon) => (
            <MaterialCommunityIcons name='magnify' color={color} size={size} />
          ),
        }}
      />
      <RootTab.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }: TabBarIcon) => (
            <MaterialCommunityIcons
              name='playlist-star'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <RootTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }: TabBarIcon) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
        }}
      />
    </RootTab.Navigator>
  );
}
