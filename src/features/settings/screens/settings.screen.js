import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { useAuthenticationContext } from '../../../services/authentication/customHook';
import { Text } from '../../../components/typography/text-component';
import { Spacer } from '../../../components/spacer/spacer-component';

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
    const photoUri = AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  return (
    <View>
      <List.Section>
        <TouchableOpacity onPress={navigation.navigate('Camera')}>
          <AvatarContainer>
            {!photo ? (
              <Avatar.Icon
                size={180}
                icon='human'
                style={{ backgroundColor: '#2182BD' }}
              />
            ) : (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                style={{ backgroundColor: '#2182BD' }}
              />
            )}

            <Spacer position='top' size='large'>
              <Text variant='caption'>{user.email}</Text>
              <Text variant='caption'>{user.email}</Text>
            </Spacer>
          </AvatarContainer>
        </TouchableOpacity>
        <SettingsItem
          title='Favourites'
          description='View your favourites'
          left={props => <List.Icon {...props} color='black' icon='heart' />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title='Logout'
          left={props => <List.Icon {...props} color='black' icon='door' />}
          onPress={onLogout}
        />
      </List.Section>
    </View>
  );
};
