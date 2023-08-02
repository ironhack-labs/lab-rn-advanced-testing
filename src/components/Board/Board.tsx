import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { s } from './Board.styles';
import { BoardState,checkWin } from '@utils';

// type Cell = 'X' | 'O' | null;

type BoardProps = {
  board: BoardState;
  size: number;
  disabled?: boolean;
  onCellAction: (cellValue: number) => void;
}

export const Board:FC<BoardProps> = ({board, size, onCellAction, disabled}) => {
  
  
  return (
    <View style={{
      width: size,
      height: size,
      backgroundColor: 'white',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      {
        board.map((cell, index) => (
          <TouchableOpacity 
            disabled={disabled}
            key={index}
            style={{
              width: '33.33%',
              height: '33.33%',
              backgroundColor: '#fff',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => onCellAction(index)}
          >
            <Text style={{
              fontSize: size / 5
            }}>{cell}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}
