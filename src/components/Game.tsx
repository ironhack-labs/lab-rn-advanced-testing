// Game.tsx

import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import Board from './Board';
import {
  CellValue,
  initializeGameBoard,
  checkWinner,
  checkDraw,
  togglePlayer,
  GameStatus,
} from '../gameLogic';
import WelcomeScreen from '../screens/WelcomeScreen';

const Game: React.FC = () => {
  const [board, setBoard] = useState<CellValue[][] | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<CellValue>(CellValue.X);
  const [gameStatus, setGameStatus] = useState<GameStatus | null>(null);

  const handleCellPress = (row: number, col: number) => {
    if (
      !board ||
      !gameStatus ||
      gameStatus !== GameStatus.Ongoing ||
      board[row][col] !== CellValue.Empty
    ) {
      return;
    }

    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard, currentPlayer)) {
      setGameStatus(GameStatus.Won);
      Alert.alert('You Won!', `Player ${currentPlayer} wins.`);
    } else if (checkDraw(newBoard)) {
      setGameStatus(GameStatus.Draw);
      Alert.alert('DRAW!', 'Finishing game in draw.');
    } else {
      setCurrentPlayer(togglePlayer(currentPlayer));
    }
  };

  const handleStartGame = () => {
    setBoard(initializeGameBoard());
    setCurrentPlayer(CellValue.X);
    setGameStatus(GameStatus.Ongoing);
  };

  return (
    <View style={styles.container}>
      {board && gameStatus ? (
        <>
          <Text style={styles.status}>
            {gameStatus === GameStatus.Ongoing
              ? `Player turn ${currentPlayer}`
              : gameStatus === GameStatus.Won
              ? `Player ${currentPlayer} wins.`
              : 'Finishing game in draw.'}
          </Text>
          <View style={styles.boardContainer}>
            <Board board={board} onCellPress={handleCellPress} />
          </View>
          {gameStatus !== GameStatus.Ongoing && (
            <TouchableOpacity
              style={styles.restartButton}
              onPress={handleStartGame}>
              <Text style={styles.restartButtonText}>Restart</Text>
            </TouchableOpacity>
          )}
        </>
      ) : (
        <WelcomeScreen onStartGame={handleStartGame} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
  },
  boardContainer: {
    borderWidth: 2,
    borderColor: '#333',
    padding: 10,
  },
  restartButton: {
    marginTop: 20,
    backgroundColor: '#46A3FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  restartButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Game;
