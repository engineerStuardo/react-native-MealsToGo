import { useContext } from 'react';

import { RestaurantContext } from './restaurants-context';

export const UseGlobalContext = () => {
  return useContext(RestaurantContext);
};
