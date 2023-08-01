// src/GameScreen.tsx

import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const GameScreen = () => {
  const initialBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState<null | string>('');

  const checkWinner = useCallback(() => {
    function checkRowsForWinner() {
      for (let row = 0; row < 3; row++) {
        if (
          board[row][0] === board[row][1] &&
          board[row][1] === board[row][2] &&
          board[row][0] !== ''
        ) {
          return board[row][0];
        }
      }
      return null;
    }

    function checkColumnsForWinner() {
      for (let col = 0; col < 3; col++) {
        if (
          board[0][col] === board[1][col] &&
          board[1][col] === board[2][col] &&
          board[0][col] !== ''
        ) {
          return board[0][col];
        }
      }
      return null;
    }

    function checkDiagonalsForWinner() {
      if (
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[0][0] !== ''
      ) {
        return board[0][0];
      }
      if (
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[0][2] !== ''
      ) {
        return board[0][2];
      }
      return null;
    }

    function isBoardFull() {
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (board[row][col] === '') {
            return false;
          }
        }
      }
      return true;
    }

    const winnerFromRows = checkRowsForWinner();
    if (winnerFromRows) {
      return winnerFromRows;
    }

    const winnerFromCols = checkColumnsForWinner();
    if (winnerFromCols) {
      return winnerFromCols;
    }

    const winnerFromDiagonals = checkDiagonalsForWinner();
    if (winnerFromDiagonals) {
      return winnerFromDiagonals;
    }

    if (isBoardFull()) {
      return 'Tied';
    }

    return null;
  }, [board]);

  const handleCellPress = useCallback(
    (row: number, col: number) => {
      if (board[row][col] === '' && !checkWinner()) {
        // Update the board and switch the player
        const newBoard = [...board];
        newBoard[row][col] = player;
        setBoard(newBoard);
        setPlayer(player === 'X' ? 'O' : 'X');

        // Check if there is a winner after each move
        setWinner(checkWinner());
      }
    },
    [board, player, checkWinner],
  );

  const handlePlayAgain = useCallback(() => {
    // Reset the board and player when the play again button is pressed
    setWinner("");
    setBoard(initialBoard);
    setPlayer('X');
  }, [initialBoard]);

  return (
    <View style={styles.container}>
      <Text style={styles.bannerText}>Tic Tac Toe</Text>
      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={styles.cell}
                onPress={() => handleCellPress(rowIndex, colIndex)}>
                <Text style={styles.cellText}>{cell}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      {winner ? (
        <Text style={styles.resultText}>
          {winner === 'Tied' ? winner : 'The winner is ' + winner}
        </Text>
      ) : null}
      <TouchableOpacity
        onPress={handlePlayAgain}
        style={styles.playAgainButton}>
        <Text style={styles.playAgainButtonText}>
          Touch here to play again!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  board: {
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  cellText: {
    fontSize: 24,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 40,
  },
  playAgainButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  playAgainButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameScreen;
