import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';

import {useGameCtx} from '../../../context';
import {GamePlayer} from '../../../types';

type TicTacToeCellProps = {
  index: number;
};

export const TicTacToeCell = ({index}: TicTacToeCellProps) => {
  const {board, winner, player, makePlayerMove} = useGameCtx();

  const cellValue = board[index];
  const statusMapper = {
    [GamePlayer.computer]: 'danger',
    [GamePlayer.player]: 'warning',
  };

  const isDisabled = !!cellValue || !!winner || player === GamePlayer.computer;

  return (
    <Button
      testID="tic-tac-toe-cell"
      style={styles.cell}
      appearance="outline"
      status={cellValue ? statusMapper[cellValue] : 'primary'}
      onPress={() => {
        if (isDisabled) {
          return;
        }

        makePlayerMove(index);
      }}
      key={index}>
      {cellValue?.toString()}
    </Button>
  );
};
const styles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
