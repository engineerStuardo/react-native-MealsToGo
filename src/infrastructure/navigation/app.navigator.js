import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { RestaurantProvider } from '../../services/restaurants/restaurants-context';
import { LocationProvider } from '../../services/location/location-context';
import { FavouritesProvider } from '../../services/favourites/favourites-context';
import { SettingsNavigator } from './settings.navigator';

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
  <FavouritesProvider>
    <LocationProvider>
      <RestaurantProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={tabBarColors()}
        >
          <Tab.Screen name='Restaurant' component={RestaurantNavigator} />
          <Tab.Screen name='Map' component={MapScreen} />
          <Tab.Screen name='Settings' component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantProvider>
    </LocationProvider>
  </FavouritesProvider>
);
