import React, { useState, useEffect, createContext, useMemo } from 'react';

import { useLocationContext } from '../location/customHook';
import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants-service';

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useLocationContext();

  const retrieveRestaurants = locationString => {
    setRestaurants([]);
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(locationString)
        .then(restaurantsTransform)
        .then(result => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch(error => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
