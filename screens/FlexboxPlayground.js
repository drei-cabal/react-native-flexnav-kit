import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

/**
 * FLEXBOX CHEAT SHEET
 * -------------------
 * flexDirection: 'row' | 'column' (default) | 'row-reverse' | 'column-reverse'
 * justifyContent (MAIN axis): 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
 * alignItems (CROSS axis): 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
 * alignSelf: overrides alignItems for ONE child
 * flexWrap: 'nowrap' (default) | 'wrap'
 * flex: 1  -> child grows to fill available space (shorthand for flexGrow:1, flexShrink:1, flexBasis:0)
 * flexGrow: how much a child grows relative to siblings
 * flexShrink: how much a child shrinks when space is tight
 * flexBasis: starting size before grow/shrink is applied
 * gap: spacing between children (RN 0.71+)
 */

const Box = ({ label, color = '#4A90D9', style }) => (
  <View style={[styles.box, { backgroundColor: color }, style]}>
    <Text style={styles.boxText}>{label}</Text>
  </View>
);

export default function FlexboxPlayground() {
  const [direction, setDirection] = useState('row');
  const [justify, setJustify] = useState('flex-start');
  const [align, setAlign] = useState('flex-start');

  const directions = ['row', 'column', 'row-reverse', 'column-reverse'];
  const justifyOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
  const alignOptions = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];

  const ToggleRow = ({ title, options, current, onSelect }) => (
    <View style={styles.toggleSection}>
      <Text style={styles.toggleTitle}>{title}: {current}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {options.map((opt) => (
          <TouchableOpacity
            key={opt}
            onPress={() => onSelect(opt)}
            style={[styles.toggleBtn, current === opt && styles.toggleBtnActive]}
          >
            <Text style={[styles.toggleBtnText, current === opt && styles.toggleBtnTextActive]}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.heading}>1. Interactive Playground</Text>
      <ToggleRow title="flexDirection" options={directions} current={direction} onSelect={setDirection} />
      <ToggleRow title="justifyContent" options={justifyOptions} current={justify} onSelect={setJustify} />
      <ToggleRow title="alignItems" options={alignOptions} current={align} onSelect={setAlign} />

      <View
        style={[
          styles.demoContainer,
          { flexDirection: direction, justifyContent: justify, alignItems: align },
        ]}
      >
        <Box label="1" />
        <Box label="2" color="#E07A5F" />
        <Box label="3" color="#81B29A" />
      </View>

      <Text style={styles.heading}>2. flex: 1 (equal growth)</Text>
      <View style={styles.row}>
        <View style={[styles.flexBox, { flex: 1, backgroundColor: '#4A90D9' }]}><Text style={styles.boxText}>flex:1</Text></View>
        <View style={[styles.flexBox, { flex: 1, backgroundColor: '#E07A5F' }]}><Text style={styles.boxText}>flex:1</Text></View>
        <View style={[styles.flexBox, { flex: 1, backgroundColor: '#81B29A' }]}><Text style={styles.boxText}>flex:1</Text></View>
      </View>

      <Text style={styles.heading}>3. Unequal flex ratios (1:2:1)</Text>
      <View style={styles.row}>
        <View style={[styles.flexBox, { flex: 1, backgroundColor: '#4A90D9' }]}><Text style={styles.boxText}>1</Text></View>
        <View style={[styles.flexBox, { flex: 2, backgroundColor: '#E07A5F' }]}><Text style={styles.boxText}>2</Text></View>
        <View style={[styles.flexBox, { flex: 1, backgroundColor: '#81B29A' }]}><Text style={styles.boxText}>1</Text></View>
      </View>

      <Text style={styles.heading}>4. alignSelf override</Text>
      <View style={[styles.demoContainer, { flexDirection: 'row', alignItems: 'flex-start', height: 120 }]}>
        <Box label="default" />
        <Box label="center" color="#E07A5F" style={{ alignSelf: 'center' }} />
        <Box label="flex-end" color="#81B29A" style={{ alignSelf: 'flex-end' }} />
        <Box label="stretch" color="#F2CC8F" style={{ alignSelf: 'stretch' }} />
      </View>

      <Text style={styles.heading}>5. flexWrap + gap</Text>
      <View style={[styles.demoContainer, { flexDirection: 'row', flexWrap: 'wrap', gap: 8, height: 'auto' }]}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <View key={n} style={{ width: 80, height: 50, backgroundColor: '#4A90D9', justifyContent: 'center', alignItems: 'center', borderRadius: 6 }}>
            <Text style={styles.boxText}>{n}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 16, fontWeight: '700', marginTop: 20, marginBottom: 8 },
  toggleSection: { marginBottom: 10 },
  toggleTitle: { fontSize: 13, fontWeight: '600', marginBottom: 4, color: '#333' },
  toggleBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
    borderRadius: 16,
    marginRight: 6,
  },
  toggleBtnActive: { backgroundColor: '#4A90D9' },
  toggleBtnText: { fontSize: 12, color: '#333' },
  toggleBtnTextActive: { color: '#fff', fontWeight: '700' },
  demoContainer: {
    height: 160,
    borderWidth: 2,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 8,
  },
  box: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    margin: 4,
  },
  boxText: { color: '#fff', fontWeight: '700' },
  row: { flexDirection: 'row', height: 70, gap: 6 },
  flexBox: { justifyContent: 'center', alignItems: 'center', borderRadius: 6 },
});
