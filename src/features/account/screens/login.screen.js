import React, { useState } from 'react';
import { TextInput, ActivityIndicator, Colors } from 'react-native-paper';

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
import { colors } from '../../../infrastructure/theme/colors';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { onLogin, error, setError, isLoading } = useAuthenticationContext();

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
          theme={{ colors: { primary: colors.brand.primary } }}
        />
        <Spacer size='large'>
          <AuthInput
            right={
              <TextInput.Icon
                name={`${showPassword ? 'eye' : 'eye-off'}`}
                color={colors.ui.secondary}
                size={28}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            label='Password'
            value={password}
            textContentType='password'
            secureTextEntry={showPassword ? false : true}
            autoCapitalize='none'
            onChangeText={password => setPassword(password)}
            theme={{ colors: { primary: colors.brand.primary } }}
          />
        </Spacer>
        <Spacer size='large'>
          {!isLoading ? (
            <AuthButton
              icon='login'
              mode='contained'
              onPress={() => {
                setError(null);
                onLogin(email, password);
              }}
            >
              LOGIN
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
        {error && (
          <ErrorContainer>
            <Spacer size='large'>
              <Text variant='error'>{error}</Text>
            </Spacer>
          </ErrorContainer>
        )}
      </AccountContainer>
      {!isLoading && (
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
      )}
    </AccountBackground>
  );
};
