// components/TicTacToeBoard.js
import React, {useState} from 'react';
import {View} from 'react-native';
import Cell from './Cell';

const TicTacToeBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleCellPress = index => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard)) {
      setWinner(currentPlayer);
    } else if (!newBoard.includes(null)) {
      setWinner('draw');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = board => {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const combination of winCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }

    return false;
  };

  const renderCell = index => {
    return (
      <Cell
        key={index}
        value={board[index]}
        onPress={() => handleCellPress(index)}
      />
    );
  };

  return (
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
      {board.map((_, index) => renderCell(index))}
    </View>
  );
};

export default TicTacToeBoard;
