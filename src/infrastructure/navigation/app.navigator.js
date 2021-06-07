import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createScreenOptions, tabBarColors } from './app.navigator.options';
import { RestaurantNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { RestaurantProvider } from '../../services/restaurants/restaurants-context';
import { LocationProvider } from '../../services/location/location-context';
import { FavouritesProvider } from '../../services/favourites/favourites-context';
import { SettingsNavigator } from './settings.navigator';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <FavouritesProvider>
    <LocationProvider>
      <RestaurantProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={tabBarColors()}
          initialRouteName='Restaurant'
        >
          <Tab.Screen name='Restaurant' component={RestaurantNavigator} />
          <Tab.Screen name='Map' component={MapScreen} />
          <Tab.Screen name='Settings' component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantProvider>
    </LocationProvider>
  </FavouritesProvider>
);
