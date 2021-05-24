import React from 'react';
import { Searchbar, Colors } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card';
import { Spacer } from '../../../components/spacer/spacer-component';
import { SearchContainer, RestaurantList } from './restaurants.screen.styles';
import { UseGlobalContext } from '../../../services/restaurants/customHook';
import { Loading, LoadingContainer } from './restaurants.screen.styles';

export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = UseGlobalContext();

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue800} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
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
