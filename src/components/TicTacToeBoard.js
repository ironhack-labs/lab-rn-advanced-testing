import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Cell from './Cell';

const TicTacToeBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes(null)) {
      setWinner('draw');
    }
  };

  const handleCellPress = index => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      checkWinner();
    }
  };

  const renderCell = index => {
    return (
      <Cell
        key={index}
        testID={index}
        value={board[index]}
        onPress={() => handleCellPress(index)}
      />
    );
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer('X');
  };

  return (
    <View style={styles.container} testID="board">
      {board.map((_, index) => renderCell(index))}

      {winner && (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            {winner === 'draw' ? "It's a draw!" : `${winner} wins!`}
          </Text>
          <TouchableOpacity onPress={resetBoard} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  message: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TicTacToeBoard;
