import React from 'react';
import {StyleSheet, View} from 'react-native';
import Square from './square';

type Props = {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
};

export default function Board({xIsNext, squares, onPlay}: Props) {
  return (
    <View testID="board" style={styles.board}>
      <View style={styles.row}>
        <Square value={squares[0]} onPress={() => {}} />
        <Square value={squares[1]} onPress={() => {}} />
        <Square value={squares[2]} onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Square value={squares[3]} onPress={() => {}} />
        <Square value={squares[4]} onPress={() => {}} />
        <Square value={squares[5]} onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Square value={squares[6]} onPress={() => {}} />
        <Square value={squares[7]} onPress={() => {}} />
        <Square value={squares[8]} onPress={() => {}} />
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
