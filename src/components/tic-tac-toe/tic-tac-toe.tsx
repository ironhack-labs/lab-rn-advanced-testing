import {StyleSheet, View} from 'react-native';
import React, {ReactNode, useEffect} from 'react';

import {TicTacToeCell} from './tic-tac-toe-cell';
import {Layout, Button, Text} from '@ui-kitten/components';
import {useGameCtx} from '../../context';
import {GamePlayer} from '../../types';

type TiTacToeProps = {
  children?: ReactNode;
};

export const TiTacToe = ({children}: TiTacToeProps) => {
  const {player, winner, makeComputerMove, board, resetGame} = useGameCtx();

  useEffect(() => {
    if (player === GamePlayer.computer && !winner) {
      const computerMoveTimeout = setTimeout(makeComputerMove, 500);
      return () => clearTimeout(computerMoveTimeout);
    }
  }, [board, player, winner, makeComputerMove]);

  return (
    <Layout style={styles.container}>
      <View style={styles.board}>{children}</View>
      {winner && (
        <View style={styles.winnerContainer}>
          <Text category="h5">
            {winner === 'tie' ? 'Nobody wins :(' : `The winner is: ${winner}`}
          </Text>

          <Button testID="reset-button" appearance="ghost" onPress={resetGame}>
            Touch here to play again
          </Button>
        </View>
      )}
    </Layout>
  );
};

TiTacToe.Cell = TicTacToeCell;

const styles = StyleSheet.create({
  container: {},
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  winnerContainer: {
    marginTop: 20,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
