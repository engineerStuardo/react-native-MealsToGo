import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from 'react-native-paper';

import { SafeArea } from '../../../components/utility/safe-area-component';
import { RestaurantInfoCard } from '../components/restaurant-info-card';
import { Spacer } from '../../../components/spacer/spacer-component';
import { RestaurantList } from './restaurants.screen.styles';
import { useRestaurantsContext } from '../../../services/restaurants/customHook';
import { Loading, LoadingContainer } from './restaurants.screen.styles';
import { Search } from '../components/search-component';
import { useFavouritesContext } from '../../../services/favourites/customHook';
import { FavouritesBar } from '../../../components/favourites/favourites-bar-component';
import { FadeInView } from '../../../components/animations/fade.animation';

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useRestaurantsContext();
  const { favourites } = useFavouritesContext();
  const [isToggled, setIsToggled] = useState(false);

  const renderItems = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('RestaurantDetail', { restaurant: item })
      }
    >
      <Spacer position='bottom' size='large'>
        <FadeInView>
          <RestaurantInfoCard restaurant={item} />
        </FadeInView>
      </Spacer>
    </TouchableOpacity>
  );

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue800} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={renderItems}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
