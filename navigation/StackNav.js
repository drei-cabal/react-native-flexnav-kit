import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

/**
 * STACK NAVIGATOR CHEAT SHEET
 * ---------------------------
 * npm install @react-navigation/native-stack
 * Import: createNativeStackNavigator from '@react-navigation/native-stack'
 *   (older courses may use createStackNavigator from '@react-navigation/stack'
 *    which needs react-native-gesture-handler configured differently — check
 *    which one your instructor's repo uses!)
 *
 * navigation.navigate('ScreenName', { params })  -> go to screen (or update if same screen)
 * navigation.push('ScreenName', { params })      -> always add a new screen to the stack
 * navigation.goBack()                            -> go back one screen
 * navigation.popToTop()                          -> back to first screen in stack
 * route.params                                   -> read params on receiving screen
 */

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home', headerStyle: { backgroundColor: '#4A90D9' }, headerTintColor: '#fff' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params?.name ?? 'Details' })}
      />
    </Stack.Navigator>
  );
}
