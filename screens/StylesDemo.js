import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

/**
 * STYLESHEET.CREATE() CHEAT SHEET
 * -------------------------------
 * - StyleSheet.create() takes a plain JS object and returns an optimized
 *   style object reference. Import from 'react-native'.
 * - Combine multiple styles with an array: style={[styles.a, styles.b]}
 *   Later items in the array override earlier ones for the same property.
 * - Conditional styles: style={[styles.base, condition && styles.extra]}
 *   (false/undefined entries in the array are simply ignored)
 * - Dynamic values that can't be predefined (e.g. from state/props) go in
 *   an inline object AFTER the StyleSheet array: style={[styles.box, { backgroundColor: dynamicColor }]}
 */

// ---------- Basic style with conditional variant ----------
function Card({ title, active }) {
  return (
    <View style={[styles.card, active && styles.cardActive]}>
      <Text style={[styles.cardText, active && styles.cardTextActive]}>{title}</Text>
    </View>
  );
}

// ---------- Button with conditional (disabled) styling ----------
function AppButton({ label, disabled, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={disabled ? undefined : onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

// ---------- Fully dynamic value (not knowable ahead of time) via inline style ----------
function HighlightBox({ highlighted }) {
  // Static structure comes from StyleSheet; the one truly dynamic value
  // (color) is merged in as a plain inline object.
  return (
    <View
      style={[
        styles.highlightBox,
        { backgroundColor: highlighted ? '#f2cc8f' : '#eee' },
      ]}
    >
      <Text style={styles.cardText}>Tap to toggle highlight ({String(highlighted)})</Text>
    </View>
  );
}

export default function StylesDemo() {
  const [active, setActive] = useState(false);

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={localStyles.heading}>Conditional card style</Text>
      <TouchableOpacity onPress={() => setActive(!active)}>
        <Card title="Tap me" active={active} />
      </TouchableOpacity>

      <Text style={localStyles.heading}>Conditional button style</Text>
      <AppButton label="Enabled Button" disabled={false} onPress={() => alert('Pressed!')} />
      <View style={{ height: 10 }} />
      <AppButton label="Disabled Button" disabled={true} />

      <Text style={localStyles.heading}>Dynamic value via inline style</Text>
      <TouchableOpacity onPress={() => setActive(!active)}>
        <HighlightBox highlighted={active} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  heading: { fontSize: 15, fontWeight: '700', marginTop: 16, marginBottom: 8 },
});

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  cardActive: {
    backgroundColor: '#4A90D9',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  cardTextActive: {
    color: '#fff',
  },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#81b29a',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  highlightBox: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e07a5f',
  },
});
