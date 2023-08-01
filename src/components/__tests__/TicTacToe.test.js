// components/__tests__/TicTacToe.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TicTacToe from '../TicTacToe';

describe('Tic Tac Toe Game', () => {
  // ... Previous test case for the initial state of the game board

  test('allows players to make moves', () => {
    const {getByTestId} = render(<TicTacToe />);
    const cell1 = getByTestId('cell-0');
    const cell2 = getByTestId('cell-1');

    fireEvent.press(cell1);
    fireEvent.press(cell2);

    expect(cell1.props.children).toBe('X'); // First player's move
    expect(cell2.props.children).toBe('O'); // Second player's move
    // ... Continue for other moves
  });

  test('announces the winner', () => {
    const {getByTestId, getByText} = render(<TicTacToe />);
    const cells = [
      getByTestId('cell-0'),
      getByTestId('cell-1'),
      getByTestId('cell-4'),
      getByTestId('cell-5'),
      getByTestId('cell-8'),
    ];

    // Simulate a winning scenario (X wins)
    fireEvent.press(cells[0]); // X
    fireEvent.press(cells[1]); // O
    fireEvent.press(cells[4]); // X
    fireEvent.press(cells[5]); // O
    fireEvent.press(cells[8]); // X

    expect(getByText('X wins!')).toBeTruthy();
  });

  // ... More test cases for draw scenarios, reset functionality, etc.
});
