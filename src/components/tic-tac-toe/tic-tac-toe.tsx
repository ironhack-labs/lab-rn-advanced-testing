import {View} from 'react-native';
import React, {ReactNode} from 'react';

import {TicTacToeCell} from './tic-tac-toe-cell';

type TiTacToeProps = {
  children: ReactNode;
};

export const TiTacToe = ({children}: TiTacToeProps) => {
  return <View>{children}</View>;
};

TiTacToe.Cell = TicTacToeCell;
