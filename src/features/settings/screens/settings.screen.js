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
`;

const AvatarContainer = styled.View`
  align-items: center;
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
    <View>
      <List.Section>
        <Spacer position='top' size='large' />
        <Spacer position='top' size='large' />
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <AvatarContainer>
            {!photo && (
              <Avatar.Icon
                size={180}
                icon='human'
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
          left={props => <List.Icon {...props} color='#5282BD' icon='heart' />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title='Delete photo'
          description='Delete your profile photo'
          left={props => (
            <List.Icon {...props} color='#5282BD' icon='delete-forever' />
          )}
          onPress={() => deleteProfilePhoto()}
        />
        <SettingsItem
          title='Logout'
          left={props => <List.Icon {...props} color='#5282BD' icon='logout' />}
          onPress={onLogout}
        />
      </List.Section>
    </View>
  );
};
