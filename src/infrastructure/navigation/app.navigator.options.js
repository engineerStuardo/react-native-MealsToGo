import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../infrastructure/theme/colors';

const TAB_ICON = {
  Restaurant: 'fast-food',
  onFocusRestaurant: 'fast-food-outline',
  Map: 'ios-map',
  onFocusMap: 'ios-map-outline',
  Settings: 'settings-sharp',
  onFocusSettings: 'settings-outline',
};

export const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const iconName = focused
      ? TAB_ICON[`onFocus${route.name}`]
      : TAB_ICON[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

export const tabBarColors = () => ({
  activeTintColor: colors.brand.primary,
  inactiveTintColor: colors.brand.muted,
});
