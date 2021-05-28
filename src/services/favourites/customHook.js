import { useContext } from 'react';

import { FavouritesContext } from './favourites-context';

export const useFavouritesContext = () => {
  return useContext(FavouritesContext);
};
