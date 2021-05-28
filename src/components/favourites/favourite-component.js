import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { useFavouritesContext } from '../../services/favourites/customHook';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 64px;
  z-index: 9;
`;

export const Favourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useFavouritesContext();

  return (
    <FavouriteButton>
      <AntDesign name='heart' size={24} color='red' />
    </FavouriteButton>
  );
};
