import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type players = 'X' | 'O';

function App(): JSX.Element {
  const [isGameStarted, setisGameStarted] = useState(false);
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState<players>('X');
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    if(isGameStarted)
      checkWin(currentPlayer);
  }, [board]);

  useEffect(() => {
    if(winner)
      setisGameStarted(false)
  }, [winner])
  

  const handleCellPress = (index: number) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
    }
  };

  const checkWin = (currentPlayer: string) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        board[a] === currentPlayer &&
        board[b] === currentPlayer &&
        board[c] === currentPlayer
      ) {
        setWinner(currentPlayer);
      }
    }

    if (!board.includes('')) {
      setWinner('Draw');
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const onRestart = () => {
    setBoard(Array(9).fill(''))
    setCurrentPlayer('X')
    setWinner(null)
  }

  return (
    <SafeAreaView style={styles.container}>
      {isGameStarted ? (
        <View style={styles.board} testID='board'>
          {board.map((cell, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cell}
              onPress={() => handleCellPress(index)}
              testID={`cell-${index}`}>
              <Text style={styles.cellText} testID={`cell-text-${index}`}>{cell}</Text>
            </TouchableOpacity>
          ))}
          <Text style={{marginTop:10}}>{`Current player: ${currentPlayer}`}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setisGameStarted(true)} testID='button-start'>
          <Text>Touch here to start</Text>
        </TouchableOpacity>
      )}

      {winner && (
        <View>
          <Text style={styles.resultText}>{winner !== "Draw" ? `${winner} won the game!` : "Draw"}</Text>
          <TouchableOpacity onPress={onRestart} testID='restart-button'>
            <Text>Touch here to play again</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: 'black',
    width: 300,
    height: 300,
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 98,
    height: 98,
    borderWidth: 1,
    borderColor: 'black',
  },
  cellText: {
    fontSize: 40,
  },
  resultText: {
    fontSize: 24,
    marginVertical: 20,
  },
});
