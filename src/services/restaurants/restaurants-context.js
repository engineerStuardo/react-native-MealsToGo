import React, { useState, useEffect, createContext, useMemo } from 'react';

import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants-service';

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then(result => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch(error => {
          setIsLoading(false);
          setError(error);
          console.log(error);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
