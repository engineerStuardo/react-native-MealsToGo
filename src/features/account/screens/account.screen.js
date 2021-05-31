import React from 'react';

import { Spacer } from '../../../components/spacer/spacer-component';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from '../components/account.styles';
import { useAuthenticationContext } from '../../../services/authentication/customHook';

export const AccountScreen = ({ navigation }) => {
  const { setError } = useAuthenticationContext();

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon='login'
          mode='contained'
          onPress={() => {
            setError(null);
            navigation.navigate('Login');
          }}
        >
          Login
        </AuthButton>
        <Spacer size='large'>
          <AuthButton
            icon='tooltip-text-outline'
            mode='contained'
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
