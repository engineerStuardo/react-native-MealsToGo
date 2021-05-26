import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTransform } from './location-service';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState([]);
  const [keyword, setKeyword] = useState('san francisco');

  const onSearch = searchKeyword => {
    setIsLoading(true);
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        seIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch(error => {
        seIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: () => null, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
