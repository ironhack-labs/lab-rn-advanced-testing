import {View} from 'react-native';
import React from 'react';
import {TiTacToe} from '../components';
import {useGameCtx} from '../context';

export const BoardScreen = () => {
  const {board} = useGameCtx();

  return (
    <View>
      <TiTacToe>
        {board.map((_, index) => (
          <TiTacToe.Cell key={index} index={index} />
        ))}
      </TiTacToe>
    </View>
  );
};
