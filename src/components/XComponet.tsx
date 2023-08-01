import React from 'react';
import { Text } from 'react-native';
import { XComponentProps } from '../interfaces/XComponent';
import { xComponentStyle } from '../themes/XComponent.styles';

const XComponent = ({ color }: XComponentProps) => (
  <Text style={[xComponentStyle.text, { color }]}>X</Text>
);

export default XComponent;
