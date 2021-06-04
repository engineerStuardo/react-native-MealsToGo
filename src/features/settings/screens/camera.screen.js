import React, { useRef, useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Text } from '../../../components/typography/text-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

import { useAuthenticationContext } from '../../../services/authentication/customHook';

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled(View)`
  flex: 1;
  justify-content: flex-end;
  align-self: center;
  margin-bottom: 30px;
  width: 150px;
`;

export const TakePhoto = styled(Button).attrs({
  color: colors.brand.secondary,
})`
  padding: ${props => props.theme.space[0]};
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useAuthenticationContext();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <ProfileCamera
      ref={camera => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      ratio={'16:9'}
    >
      <ButtonContainer>
        <TakePhoto icon='camera' onPress={snap} mode='contained'>
          take photo
        </TakePhoto>
      </ButtonContainer>
    </ProfileCamera>
  );
};
