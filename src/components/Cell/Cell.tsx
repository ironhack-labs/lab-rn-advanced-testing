import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// Definimos el tipo CellProps
type CellProps = {
  value?: string; 
  onPress?: () => void; 
};

export const Cell = ({ value, onPress }: CellProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cell;
