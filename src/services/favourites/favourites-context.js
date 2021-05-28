import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = restaurant => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFromFavourites = restaurant => {
    const newFavourites = favourites.filter(
      item => item.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
