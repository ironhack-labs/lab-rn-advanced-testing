import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  value: string;
  onPress: () => void;
};

export default function Square({value, onPress}: Props) {
  return (
    <TouchableOpacity
      testID="square"
      style={styles.container}
      onPress={onPress}>
      <Text testID="square-text">{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderWidth: 1,
    margin: 2,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
