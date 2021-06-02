import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import firebase from 'firebase';

import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/utility/safe-area-component';
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationProvider } from './src/services/authentication/authentication-context';

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

  const firebaseConfig = {
    apiKey: 'AIzaSyA0oUUEQKPy_VBq1-yOig_ij4-rj-fa0ac',
    authDomain: 'mealstogo-5fec5.firebaseapp.com',
    projectId: 'mealstogo-5fec5',
    storageBucket: 'mealstogo-5fec5.appspot.com',
    messagingSenderId: '295306349466',
    appId: '1:295306349466:web:74136a3e554ddcc4cfc823',
  };

  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

  return (
    <SafeArea>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <Navigation />
        </AuthenticationProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </SafeArea>
  );
}
