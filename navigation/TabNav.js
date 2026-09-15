import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackNav from './StackNav';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

/**
 * TAB NAVIGATOR CHEAT SHEET
 * -------------------------
 * npm install @react-navigation/bottom-tabs
 * screenOptions can be a function of ({ route }) to set per-screen icons dynamically
 * tabBarIcon receives { focused, color, size }
 *
 * IMPORTANT: You can nest a full Stack Navigator AS ONE TAB (see "HomeTab" below).
 * This is the most commonly tested nesting pattern: Tab -> Stack -> Screens
 */

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // StackNav already shows its own headers
        tabBarActiveTintColor: '#4A90D9',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={StackNav} options={{ title: 'Home' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
