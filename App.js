import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/utility/safe-area-component';
import { RestaurantProvider } from './src/services/restaurants/restaurants-context';
import { LocationProvider } from './src/services/location/location-context';
import { FavouritesProvider } from './src/services/favourites/favourites-context';
import { Navigation } from './src/infrastructure/navigation';

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
