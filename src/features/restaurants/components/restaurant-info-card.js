import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.title};
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Address = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://ep01.epimg.net/economia/imagenes/2019/11/12/actualidad/1573563004_166027_1573571338_noticia_normal.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
