import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

import { Spacer } from '../../../components/spacer/spacer-component';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from '../components/account.styles';
import { useAuthenticationContext } from '../../../services/authentication/customHook';

export const AccountScreen = ({ navigation }) => {
  const { setError } = useAuthenticationContext();
  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  }, []);

  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          ref={animation}
          loop={true}
          source={require('../../../../assets/watermelon.json')}
        />
      </AnimationWrapper>
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
