import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: 'fast-food',
  onFocusRestaurant: 'fast-food-outline',
  Map: 'ios-map',
  onFocusMap: 'ios-map-outline',
  Settings: 'settings-sharp',
  onFocusSettings: 'settings-outline',
};

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const iconName = focused
      ? TAB_ICON[`onFocus${route.name}`]
      : TAB_ICON[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarColors = () => ({
  activeTintColor: '#fc6c85',
  inactiveTintColor: 'gray',
});

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={tabBarColors()}
  >
    <Tab.Screen name='Restaurant' component={RestaurantNavigator} />
    <Tab.Screen name='Map' component={MapScreen} />
    <Tab.Screen name='Settings' component={SettingsScreen} />
  </Tab.Navigator>
);
