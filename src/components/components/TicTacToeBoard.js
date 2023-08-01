import React from 'react';
import {View} from 'react-native';
import Cell from './Cell';

const TicTacToeBoard = () => {
  const board = Array(9).fill(null);

  const handleCellPress = index => {
    // Implement cell press logic
  };

  const renderCell = index => {
    return (
      <Cell
        key={index}
        value={board[index]}
        onPress={() => handleCellPress(index)}
      />
    );
  };

  return (
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
      {board.map((_, index) => renderCell(index))}
    </View>
  );
};

export default TicTacToeBoard;
