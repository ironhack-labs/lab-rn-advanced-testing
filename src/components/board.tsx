import React from 'react';
import {StyleSheet, View} from 'react-native';
import Square from './square';
import {calculateWinner} from '../utils';

type Props = {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
};

export default function Board({xIsNext, squares, onPlay}: Props) {
  function handleSquarePress(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  return (
    <View testID="board" style={styles.board}>
      <View style={styles.row}>
        <Square
          id={0}
          value={squares[0]}
          onPress={() => handleSquarePress(0)}
        />
        <Square
          id={1}
          value={squares[1]}
          onPress={() => handleSquarePress(1)}
        />
        <Square
          id={2}
          value={squares[2]}
          onPress={() => handleSquarePress(2)}
        />
      </View>
      <View style={styles.row}>
        <Square
          id={3}
          value={squares[3]}
          onPress={() => handleSquarePress(3)}
        />
        <Square
          id={4}
          value={squares[4]}
          onPress={() => handleSquarePress(4)}
        />
        <Square
          id={5}
          value={squares[5]}
          onPress={() => handleSquarePress(5)}
        />
      </View>
      <View style={styles.row}>
        <Square
          id={6}
          value={squares[6]}
          onPress={() => handleSquarePress(6)}
        />
        <Square
          id={7}
          value={squares[7]}
          onPress={() => handleSquarePress(7)}
        />
        <Square
          id={8}
          value={squares[8]}
          onPress={() => handleSquarePress(8)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {},
  row: {
    flexDirection: 'row',
  },
});
