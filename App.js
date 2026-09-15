// MUST be the first import in the entire app
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNav from './navigation/DrawerNav';

/**
 * FULL NESTED STRUCTURE:
 * NavigationContainer
 *   -> DrawerNav
 *        -> TabNav (as one Drawer.Screen)
 *             -> StackNav (as one Tab.Screen)
 *                  -> HomeScreen, DetailsScreen
 *        -> ProfileScreen (as another Drawer.Screen)
 *
 * Swap DrawerNav for TabNav or StackNav below to test each in isolation
 * (see App.testing-variants.js for ready-made swaps).
 */

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
