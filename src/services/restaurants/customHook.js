import { useContext } from 'react';

import { RestaurantContext } from './restaurants-context';

export const useGlobalContext = () => {
  return useContext(RestaurantContext);
};
