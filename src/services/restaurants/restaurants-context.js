import React, { useContext, createContext } from 'react';

const RestaurantConext = createContext();

export const RestaurantProvider = ({ children }) => {
  return (
    <RestaurantConext.Provider value='hello world'>
      {children}
    </RestaurantConext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(RestaurantConext);
};
