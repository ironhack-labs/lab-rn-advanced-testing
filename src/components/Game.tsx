import {Text, View} from 'react-native';
import styles from '../../styles';
import Board from './Board';
import {useMemo, useState} from 'react';
import Winner from './Winner';
import {calculateWinner} from '../utils/tic-tac-toe';

export const Game = () => {
  const [playerTurn, setPlayerTurn] = useState(true);
  const [squares, setSquares] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const winner = useMemo(() => calculateWinner(squares.flat()), [squares]);

  const handleSquarePress = (x: number, y: number) => {
    const value = playerTurn ? 'X' : 'O';
    const newSquares = [...squares];

    if (newSquares[x][y] !== '' && !winner) {
      return;
    }

    newSquares[x][y] = value;

    setPlayerTurn(!playerTurn);
    setSquares(newSquares);
  };

  const reseGame = () => {
    setSquares([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
  };

  return (
    <View style={styles.container} testID="app">
      <Text style={styles.title}>Tic-Tac-Toe!</Text>
      <Board squares={squares} handleOnPress={handleSquarePress} />

      {winner && <Winner winner={winner} handleResetGame={reseGame} />}
    </View>
  );
};
