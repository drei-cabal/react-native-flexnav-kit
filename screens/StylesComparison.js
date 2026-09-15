import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import styled, { css } from 'styled-components/native';

/**
 * KEY DIFFERENCES
 * ---------------
 * StyleSheet.create():
 *   - Plain JS objects, validated + optimized by RN
 *   - No dynamic values inside the object itself (pass via inline style or conditional array)
 *   - Import: from 'react-native'
 *
 * styled-components:
 *   - CSS-like template literals attached directly to a component
 *   - Supports props-based dynamic styling directly in the template
 *   - Requires: npm install styled-components
 *   - Import components as: styled.View`...`  /  styled.Text`...`
 *   - Needs 'styled-components/native' (NOT plain 'styled-components')
 */

// ---------- StyleSheet.create version ----------
function CardStyleSheet({ title, active }) {
  return (
    <View style={[styles.card, active && styles.cardActive]}>
      <Text style={[styles.cardText, active && styles.cardTextActive]}>{title}</Text>
    </View>
  );
}

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
});

// ---------- styled-components version (equivalent) ----------
const Card = styled.View`
  padding: 16px;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? '#4A90D9' : '#eee')};
  margin-bottom: 10px;
`;

const CardText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.active ? '#fff' : '#333')};
`;

function CardStyledComponents({ title, active }) {
  return (
    <Card active={active}>
      <CardText active={active}>{title}</CardText>
    </Card>
  );
}

// ---------- Styled button showing conditional css helper ----------
const StyledButton = styled.TouchableOpacity`
  padding: 12px 20px;
  border-radius: 8px;
  align-items: center;
  background-color: #81b29a;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc;
    `}
`;

const StyledButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
`;

// ---------- Screen combining both ----------
export default function StylesComparison() {
  const [active, setActive] = React.useState(false);

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={localStyles.heading}>StyleSheet.create()</Text>
      <TouchableOpacity onPress={() => setActive(!active)}>
        <CardStyleSheet title="Tap me (StyleSheet)" active={active} />
      </TouchableOpacity>

      <Text style={localStyles.heading}>styled-components</Text>
      <TouchableOpacity onPress={() => setActive(!active)}>
        <CardStyledComponents title="Tap me (styled-components)" active={active} />
      </TouchableOpacity>

      <Text style={localStyles.heading}>Styled button with conditional prop</Text>
      <StyledButton disabled={false} onPress={() => alert('Pressed!')}>
        <StyledButtonText>Enabled Button</StyledButtonText>
      </StyledButton>
      <View style={{ height: 10 }} />
      <StyledButton disabled={true}>
        <StyledButtonText>Disabled Button</StyledButtonText>
      </StyledButton>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  heading: { fontSize: 15, fontWeight: '700', marginTop: 16, marginBottom: 8 },
});
