import React from 'react';
import { TouchableOpacity } from 'react-native';

import { RestaurantInfoCard } from '../../../features/restaurants/components/restaurant-info-card';
import { Spacer } from '../../../components/spacer/spacer-component';
import { RestaurantList } from '../../../features/restaurants/screens/restaurants.screen.styles';
import { useFavouritesContext } from '../../../services/favourites/customHook';
import { Text } from '../../../components/typography/text-component';
import { NoFavouritesArea } from '../components/favourites.screen.styles';

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useFavouritesContext();

  return favourites.length ? (
    <>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant: item })
              }
            >
              <Spacer position='bottom' size='large'>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet...</Text>
    </NoFavouritesArea>
  );
};
