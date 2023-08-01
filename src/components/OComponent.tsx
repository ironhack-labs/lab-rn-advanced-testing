import React from 'react';
import { Text } from 'react-native';
import { OComponentProps } from '../interfaces/OComponents';
import { oComponentstyles } from '../themes/OComponent.styles';

const OComponent = ({ color }: OComponentProps) => (
  <Text style={[oComponentstyles.text, { color }]}>O</Text>
);

export default OComponent;
