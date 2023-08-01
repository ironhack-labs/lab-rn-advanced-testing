import React from 'react';
import { View, StyleSheet } from 'react-native';
import TicTacToe from './src/components/TicTacToe';

const App = () => {
  return (
    <View style={styles.container}>
      <TicTacToe />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default App;
