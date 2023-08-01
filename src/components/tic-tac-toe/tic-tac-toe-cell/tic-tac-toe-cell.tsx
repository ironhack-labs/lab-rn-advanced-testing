import {View, Text} from 'react-native';
import React from 'react';

type TicTacToeCellProps = {
  index: number;
};

export const TicTacToeCell = ({index}: TicTacToeCellProps) => {
  return (
    <View>
      <Text>TicTacToeCell {index}</Text>
    </View>
  );
};
