import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface OComponentProps {
  color: string;
}

const OComponent = ({ color }: OComponentProps) => (
  <Text style={[styles.text, { color }]}>O</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default OComponent;
