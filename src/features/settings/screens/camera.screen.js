import React, { useRef, useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../../components/typography/text-component';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAuthenticationContext } from '../../../services/authentication/customHook';

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
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
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={camera => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      ></ProfileCamera>
    </TouchableOpacity>
  );
};
