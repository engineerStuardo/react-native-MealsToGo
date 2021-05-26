import { useContext } from 'react';

import { RestaurantContext } from './restaurants-context';

export const useRestaurantsContext = () => {
  return useContext(RestaurantContext);
};
