import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card';
import { Spacer } from '../../../components/spacer/spacer-component';
import { RestaurantList } from './restaurants.screen.styles';
import { useRestaurantsContext } from '../../../services/restaurants/customHook';
import { Loading, LoadingContainer } from './restaurants.screen.styles';
import { Search } from '../components/search-component';

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useRestaurantsContext();

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue800} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('RestaurantDetail')}
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
  );
};
