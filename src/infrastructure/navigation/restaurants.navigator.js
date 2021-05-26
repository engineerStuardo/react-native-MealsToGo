import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import { RestaurantScreen } from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode='none'>
      <RestaurantStack.Screen name='Restaurants' component={RestaurantScreen} />
      <RestaurantStack.Screen
        name='RestaurantDetail'
        component={() => <Text>Restaurant Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
