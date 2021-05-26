import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantScreen } from '../../features/restaurants/screens/restaurants.screen';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home!</Text>
    </View>
  );
};

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
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={tabBarColors()}
    >
      <Tab.Screen name='Restaurant' component={RestaurantScreen} />
      <Tab.Screen name='Map' component={HomeScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
