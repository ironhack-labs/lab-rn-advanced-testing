import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CellValue } from '../gameLogic';

interface CellProps {
  value: CellValue;
  onPress: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onPress }) => {
  const cellBackground = value === CellValue.X ? '#FF827E' : value === CellValue.O ? '#46A3FF' : '#F1F1F1';

  return (
    <TouchableOpacity
      style={[styles.cell, { backgroundColor: cellBackground }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.cellText, { color: value === CellValue.Empty ? '#333' : '#fff' }]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
  },
  cellText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default Cell;
