import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { spaceStyle } from '../themes/Space.styles';
import { boardStyle } from '../themes/Board.styles';
import {BoardProps} from '../interfaces/Board';

const Board = ({turns, onTurn}: BoardProps) => {
  const renderSpace = (index: number) => {
    const spaceValue = turns[index] || '';
    return (
      <TouchableOpacity
        style={spaceStyle.space}
        onPress={() => onTurn(index)}
        disabled={!!spaceValue}
        testID={`space-${index}`} 
        >
        <Text style={spaceStyle.spaceValue}>{spaceValue}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={spaceStyle.container}>
      <View style={boardStyle.board}>
        <View style={boardStyle.row}>
          {renderSpace(0)}
          {renderSpace(1)}
          {renderSpace(2)}
        </View>
        <View style={boardStyle.row}>
          {renderSpace(3)}
          {renderSpace(4)}
          {renderSpace(5)}
        </View>
        <View style={boardStyle.row}>
          {renderSpace(6)}
          {renderSpace(7)}
          {renderSpace(8)}
        </View>
      </View>
    </View>
  );
};

export default Board;
