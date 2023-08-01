import React from 'react';
import {View, Text} from 'react-native';

const GameStatus = ({currentPlayer, winner}) => {
  return (
    <View>
      {winner ? (
        <Text>{winner === 'draw' ? "It's a draw!" : `${winner} wins!`}</Text>
      ) : (
        <Text>{`Current player: ${currentPlayer}`}</Text>
      )}
    </View>
  );
};

export default GameStatus;
