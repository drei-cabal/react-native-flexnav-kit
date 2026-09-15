import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './TabNav';
import ProfileScreen from '../screens/ProfileScreen';
import CustomDrawerContent from './CustomDrawerContent';

/**
 * DRAWER NAVIGATOR CHEAT SHEET
 * ----------------------------
 * npm install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
 * Requires: import 'react-native-gesture-handler' at the VERY TOP of the app entry file (App.js)
 * Requires: babel.config.js plugin 'react-native-reanimated/plugin' (listed LAST)
 *
 * This is the "full nesting" pattern usually tested:
 *   Drawer -> Tab -> Stack -> Screens
 */

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#4A90D9',
      }}
    >
      <Drawer.Screen name="MainTabs" component={TabNav} options={{ title: 'Home' }} />
      <Drawer.Screen name="ProfileDrawer" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Drawer.Navigator>
  );
}
