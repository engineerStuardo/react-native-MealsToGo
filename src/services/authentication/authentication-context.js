import React, { useState, createContext, useEffect } from 'react';
import * as firebase from 'firebase';

import { loginRequest } from './authentication-service';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(usr => {
      if (usr) {
        setUser(usr);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

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

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError('Password do not match');
      setIsLoading(false);
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userInfo => {
        setUser(userInfo);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        setError,
        isAuthenticated: !!user,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
