import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuthenticationContext } from '../../services/authentication/customHook';
import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

export const Navigation = () => {
  const { isAuthenticated } = useAuthenticationContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
