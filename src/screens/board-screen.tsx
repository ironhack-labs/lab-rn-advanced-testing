import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TiTacToe} from '../components';
import {useGameCtx} from '../context';
import {Text} from '@ui-kitten/components';

export const BoardScreen = () => {
  const {board} = useGameCtx();

  return (
    <View style={styles.container}>
      <Text category="h1" style={styles.title}>
        Tic Tac Toe Game
      </Text>
      <TiTacToe>
        {board.map((_, index) => (
          <TiTacToe.Cell key={index} index={index} />
        ))}
      </TiTacToe>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
