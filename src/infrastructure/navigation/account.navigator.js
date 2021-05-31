import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const AccountStack = createStackNavigator();

export const AccountNavigator = () => (
  <AccountStack.Navigator headerMode='none'>
    <AccountStack.Screen
      name='Main'
      component={() => (
        <View>
          <Text>Account Screen</Text>
        </View>
      )}
    />
    <AccountStack.Screen
      name='Login'
      component={() => (
        <View>
          <Text>Login Screen</Text>
        </View>
      )}
    />
  </AccountStack.Navigator>
);
