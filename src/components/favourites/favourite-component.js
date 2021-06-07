import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { useFavouritesContext } from '../../services/favourites/customHook';
import { colors } from '../../infrastructure/theme/colors';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useFavouritesContext();
  const isFavourite = favourites.find(
    item => item.placeId === restaurant.placeId
  );

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? 'heart' : 'hearto'}
        size={24}
        color={isFavourite ? colors.ui.error : colors.ui.quaternary}
      />
    </FavouriteButton>
  );
};
