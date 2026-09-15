/**
 * QUICK-SWAP REFERENCE — not meant to run directly.
 * Copy whichever variant you need into App.js during the exam
 * to test a single piece in isolation.
 */

// ---------- Variant 1: Stack only ----------
/*
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './navigation/StackNav';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
*/

// ---------- Variant 2: Tab only (with nested Stack inside one tab) ----------
/*
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './navigation/TabNav';

export default function App() {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}
*/

// ---------- Variant 3: Drawer only ----------
/*
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNav from './navigation/DrawerNav';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
*/

// ---------- Variant 4: Just the Flexbox playground (no navigation) ----------
/*
import React from 'react';
import FlexboxPlayground from './screens/FlexboxPlayground';

export default function App() {
  return <FlexboxPlayground />;
}
*/

// ---------- Variant 5: Just the Styles comparison (no navigation) ----------
/*
import React from 'react';
import StylesComparison from './screens/StylesComparison';

export default function App() {
  return <StylesComparison />;
}
*/
