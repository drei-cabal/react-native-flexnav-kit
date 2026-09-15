import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

/**
 * CUSTOM DRAWER CONTENT CHEAT SHEET
 * ----------------------------------
 * Pass this as: <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
 * DrawerItemList renders the default auto-generated items (one per Drawer.Screen)
 * DrawerItem lets you add EXTRA custom items (e.g., "Logout") not tied to a screen
 */

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My App</Text>
        <Text style={styles.subText}>user@example.com</Text>
      </View>

      {/* Renders default items for each Drawer.Screen */}
      <DrawerItemList {...props} />

      {/* Custom extra item with its own action */}
      <DrawerItem
        label="Logout"
        onPress={() => alert('Logout pressed')}
        icon={() => null}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee', marginBottom: 10 },
  headerText: { fontSize: 18, fontWeight: '700' },
  subText: { fontSize: 12, color: '#666', marginTop: 4 },
});
