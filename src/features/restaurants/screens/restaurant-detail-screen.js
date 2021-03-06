import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card';
import { colors } from '../../../infrastructure/theme/colors';

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title='Meals'>
          <List.Accordion
            title='Breakfast'
            left={props => <List.Icon {...props} icon='bread-slice' />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            theme={{ colors: { primary: colors.brand.primary } }}
          >
            <List.Item title='Eggs Benedict' />
            <Divider />
            <List.Item title='Classic Breakfast' />
          </List.Accordion>
          <Divider />

          <List.Accordion
            title='Lunch'
            left={props => <List.Icon {...props} icon='hamburger' />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
            theme={{ colors: { primary: colors.brand.primary } }}
          >
            <List.Item title='Burger w/ Fries' />
            <Divider />
            <List.Item title='Steak Sandwich' />
            <Divider />
            <List.Item title='Mushroom Soup' />
          </List.Accordion>
          <Divider />

          <List.Accordion
            title='Dinner'
            left={props => <List.Icon {...props} icon='food-variant' />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
            theme={{ colors: { primary: colors.brand.primary } }}
          >
            <List.Item title='Spaghetti Bolognese' />
            <Divider />
            <List.Item title='Veal Cutlet with Chiken Mushroom Rotini' />
            <Divider />
            <List.Item title='Steak Frites' />
          </List.Accordion>
          <Divider />

          <List.Accordion
            title='Drinks'
            left={props => <List.Icon {...props} icon='cup' />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
            theme={{ colors: { primary: colors.brand.primary } }}
          >
            <List.Item title='Coffee' />
            <Divider />
            <List.Item title='Tea' />
            <Divider />
            <List.Item title='Modelo' />
            <Divider />
            <List.Item title='Coke' />
            <Divider />
            <List.Item title='Fanta' />
          </List.Accordion>
          <Divider />
        </List.Section>
      </ScrollView>
    </>
  );
};
