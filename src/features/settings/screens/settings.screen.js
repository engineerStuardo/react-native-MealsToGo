import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { useAuthenticationContext } from '../../../services/authentication/customHook';
import { Text } from '../../../components/typography/text-component';
import { Spacer } from '../../../components/spacer/spacer-component';
import { colors } from '../../../infrastructure/theme/colors';

const SettingsItem = styled(List.Item)`
  padding: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[2]};
  background-color: rgba(33, 130, 189, 0.15);
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingsBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const TransparentSafeArea = styled(View)`
  flex: 1;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useAuthenticationContext();
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async currentUser => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  const deleteProfilePhoto = async () => {
    try {
      await AsyncStorage.removeItem(`${user.uid}-photo`);
      setPhoto(null);
    } catch (error) {
      console.log(`Error by deleting AsyncStorage ${error}`);
    }
  };

  return (
    <>
      <TransparentSafeArea>
        <List.Section>
          <Spacer position='top' size='large' />
          <Spacer position='top' size='large' />
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            <AvatarContainer>
              {!photo && (
                <Avatar.Icon
                  size={180}
                  icon='account'
                  style={{ backgroundColor: colors.brand.primary }}
                />
              )}
              {photo && (
                <Avatar.Image
                  size={180}
                  source={{ uri: photo }}
                  style={{ backgroundColor: colors.brand.primary }}
                />
              )}
              <Text variant='caption'>(Tap to change photo)</Text>
              <Spacer position='top' size='large'>
                <Text variant='body'>Welcome, {user.email}</Text>
              </Spacer>
              <Spacer position='bottom' size='large' />
            </AvatarContainer>
          </TouchableOpacity>
          <SettingsItem
            title='Favourites'
            description='View your favourites'
            left={props => (
              <List.Icon {...props} color={colors.ui.error} icon='heart' />
            )}
            onPress={() => navigation.navigate('Favourites')}
          />
          <SettingsItem
            title='Delete photo'
            description='Delete your profile photo'
            left={props => (
              <List.Icon
                {...props}
                color={colors.brand.secondary}
                icon='delete-forever'
              />
            )}
            onPress={() => deleteProfilePhoto()}
          />
          <SettingsItem
            title='Logout'
            left={props => (
              <List.Icon
                {...props}
                color={colors.brand.secondary}
                icon='logout'
              />
            )}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
      <SettingsBackground />
    </>
  );
};
