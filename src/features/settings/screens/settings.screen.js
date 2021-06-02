import React from 'react';
import { View } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

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
  return (
    <View>
      <List.Section>
        <AvatarContainer>
          <Avatar.Icon
            size={180}
            icon='human'
            style={{ backgroundColor: '#2182BD' }}
          />
          <Spacer position='top' size='large'>
            <Text variant='caption'>{user.email}</Text>
          </Spacer>
        </AvatarContainer>
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
