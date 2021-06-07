import React, { useRef, useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text } from '../../../components/typography/text-component';
import { useAuthenticationContext } from '../../../services/authentication/customHook';
import {
  ProfileCamera,
  ButtonContainer,
  TakePhoto,
} from '../components/camera.screen.styles';

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
