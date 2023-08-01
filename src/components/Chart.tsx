import {View, Text} from 'react-native';
import React from 'react';
import {chartStyles} from '../themes/Chart';
import {ChartProps} from '../interfaces/Chart';

export const Chart = ({symbol}: ChartProps) => {
  return (
    <View style={chartStyles.container}>
      <Text>{symbol}</Text>
    </View>
  );
};
