import React from 'react';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card';
import { Spacer } from '../../../components/spacer/spacer-component';
import { SearchContainer, RestaurantList } from './restaurants.screen.styles';
import { UseGlobalContext } from '../../../services/restaurants/customHook';
import { log } from 'react-native-reanimated';

export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = UseGlobalContext();

  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Spacer position='bottom' size='large'>
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={item => item.name}
      />
    </>
  );
};
