import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // Reading params passed via navigation.navigate('Details', { itemId, name })
  const { itemId, name } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Name: {name}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Push Details Again (stack depth demo)"
        onPress={() => navigation.push('Details', { itemId: itemId + 1, name: 'Next Item' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  title: { fontSize: 22, fontWeight: '700' },
});
