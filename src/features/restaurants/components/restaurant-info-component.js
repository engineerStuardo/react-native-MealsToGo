import React from 'react';
import { Text } from 'react-native';

export const RestaurantInfo = ({ restaurant = {} }) => {
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
  return <Text>{name}</Text>;
};
