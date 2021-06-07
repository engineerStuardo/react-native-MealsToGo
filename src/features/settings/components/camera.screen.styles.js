import styled from 'styled-components/native';
import { Camera } from 'expo-camera';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled(View)`
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
