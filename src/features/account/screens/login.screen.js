import React, { useState } from 'react';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer-component';
import { useAuthenticationContext } from '../../../services/authentication/customHook';
import { Text } from '../../../components/typography/text-component';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error, setError } = useAuthenticationContext();

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label='Email'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={email => setEmail(email)}
        />
        <Spacer size='large'>
          <AuthInput
            label='Password'
            value={password}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            secure
            onChangeText={password => setPassword(password)}
          />
        </Spacer>
        <Spacer size='large'>
          <AuthButton
            icon='login'
            mode='contained'
            onPress={() => onLogin(email, password)}
          >
            LOGIN
          </AuthButton>
        </Spacer>
        {error && (
          <ErrorContainer>
            <Spacer size='large'>
              <Text variant='error'>{error}</Text>
            </Spacer>
          </ErrorContainer>
        )}
      </AccountContainer>
      <Spacer size='large'>
        <AuthButton
          icon='keyboard-return'
          mode='contained'
          onPress={() => {
            setError(null);
            navigation.goBack();
          }}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
