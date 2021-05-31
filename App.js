import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import firebase from 'firebase/app';

import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/utility/safe-area-component';
import { RestaurantProvider } from './src/services/restaurants/restaurants-context';
import { LocationProvider } from './src/services/location/location-context';
import { FavouritesProvider } from './src/services/favourites/favourites-context';
import { Navigation } from './src/infrastructure/navigation';

const firebaseConfig = {
  apiKey: 'AIzaSyA0oUUEQKPy_VBq1-yOig_ij4-rj-fa0ac',
  authDomain: 'mealstogo-5fec5.firebaseapp.com',
  projectId: 'mealstogo-5fec5',
  storageBucket: 'mealstogo-5fec5.appspot.com',
  messagingSenderId: '295306349466',
  appId: '1:295306349466:web:74136a3e554ddcc4cfc823',
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <SafeArea>
      <ThemeProvider theme={theme}>
        <FavouritesProvider>
          <LocationProvider>
            <RestaurantProvider>
              <Navigation />
            </RestaurantProvider>
          </LocationProvider>
        </FavouritesProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </SafeArea>
  );
}
