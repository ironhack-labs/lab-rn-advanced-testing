import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Cell = ({value, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={`cell-${value}`}
      style={{
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
};

export default Cell;
