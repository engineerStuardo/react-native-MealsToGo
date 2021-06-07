import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

import { Spacer } from '../spacer/spacer-component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info-component';
import { Text } from '../typography/text-component';
import { FadeInView } from '../animations/fade.animation';

const FavouritesWrapper = styled(Card)`
  padding: 10px;
  z-index: 999;
  border-radius: 15px;
`;

const TitleCenter = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  return (
    <FavouritesWrapper elevation={3}>
      <Spacer position='left' size='large'>
        <TitleCenter>
          <Text variant='caption'>Favourites</Text>
          {!favourites.length && (
            <>
              <Spacer position='top' size='large' />
              <Text variant='error'> No favourites yet...</Text>
              <Spacer position='bottom' size='large' />
            </>
          )}
        </TitleCenter>
      </Spacer>
      <Spacer position='bottom' size='large' />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map(restaurant => {
          const key = restaurant.name.split(' ').join('');
          return (
            <Spacer key={key} position='left' size='medium'>
              <TouchableOpacity
                onPress={() => onNavigate('RestaurantDetail', { restaurant })}
              >
                <FadeInView>
                  <CompactRestaurantInfo restaurant={restaurant} />
                </FadeInView>
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
