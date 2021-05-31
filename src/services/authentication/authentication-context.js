import React, { useState, createContext } from 'react';
import * as firebase from 'firebase';

import { loginRequest } from './authentication-service';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(userInfo => {
        setUser(userInfo);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, isLoading, error, onLogin, isAuthenticated: !!user }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
