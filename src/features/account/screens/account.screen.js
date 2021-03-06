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

export const AccountScreen = ({ navigation }) => {
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
          source={require('../../../../assets/food-loading-animation.json')}
        />
      </AnimationWrapper>
      <Spacer position='top' size='large' />
      <Spacer position='top' size='large' />
      <Spacer position='top' size='large' />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon='login'
          mode='contained'
          onPress={() => navigation.navigate('Login')}
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
