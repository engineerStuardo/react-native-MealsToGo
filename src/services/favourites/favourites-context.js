import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const saveFavourites = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favourites', jsonValue);
    } catch (e) {
      console.log('Error storing', e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favourites');
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log('Error loading ', e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
