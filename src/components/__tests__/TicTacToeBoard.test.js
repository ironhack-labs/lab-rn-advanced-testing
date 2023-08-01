import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TicTacToeBoard from '../TicTacToeBoard';

describe('Tic Tac Toe Board', () => {
  it('should render the Tic Tac Toe board with cells', () => {
    const {getByTestId} = render(<TicTacToeBoard />);
    const board = getByTestId('board');
    expect(board.children.length).toBe(9); // Assuming there are 9 cells in the board
  });

  it('should switch players when tapping on cells', () => {
    const {getByText} = render(<TicTacToeBoard />);
    const cell1 = getByText('X'); // Assuming the initial player is X and cell 1 has 'X'
    fireEvent.press(cell1);
    const cell2 = getByText('O'); // After tapping cell 1, the player should switch to O
    fireEvent.press(cell2);
    const cell3 = getByText('X'); // After tapping cell 2, the player should switch back to X
    expect(cell3).toBeTruthy();
  });

  it('should not allow tapping on an already filled cell', () => {
    const {getByText} = render(<TicTacToeBoard />);
    const cell1 = getByText('X'); // Assuming the initial player is X and cell 1 has 'X'
    fireEvent.press(cell1);
    fireEvent.press(cell1); // Try to tap on cell 1 again
    const cell1AfterTap = getByText('X'); // Cell 1 should still have 'X'
    expect(cell1AfterTap).toBeTruthy();
  });

  it('should display the winning message when there is a winner', () => {
    const {getByText} = render(<TicTacToeBoard />);
    const cell1 = getByText('X');
    const cell2 = getByText('O');
    fireEvent.press(cell1);
    fireEvent.press(cell2);
    fireEvent.press(getByText('X')); // Player X wins
    const winMessage = getByText('X wins!');
    expect(winMessage).toBeTruthy();
  });

  it("should display 'It's a draw!' message when the game ends in a draw", () => {
    const {getByText} = render(<TicTacToeBoard />);
    const cells = [
      getByText('X'),
      getByText('O'),
      getByText('X'),
      getByText('O'),
      getByText('O'),
      getByText('X'),
      getByText('X'),
      getByText('X'),
      getByText('O'),
    ];
    // Fill the cells in such a way that it results in a draw
    fireEvent.press(cells[0]);
    fireEvent.press(cells[1]);
    fireEvent.press(cells[2]);
    fireEvent.press(cells[4]);
    fireEvent.press(cells[3]);
    fireEvent.press(cells[6]);
    fireEvent.press(cells[5]);
    fireEvent.press(cells[8]);
    fireEvent.press(cells[7]);
    const drawMessage = getByText("It's a draw!");
    expect(drawMessage).toBeTruthy();
  });

  it('should reset the board and game state when clicking the "Play Again" button', () => {
    const {getByText, getByTestId} = render(<TicTacToeBoard />);
    const cell1 = getByText('X');
    const cell2 = getByText('O');
    fireEvent.press(cell1);
    fireEvent.press(cell2);
    fireEvent.press(getByText('X')); // Player X wins
    const winMessage = getByText('X wins!');
    expect(winMessage).toBeTruthy();

    const playAgainButton = getByText('Play Again');
    fireEvent.press(playAgainButton);

    const board = getByTestId('board');
    expect(board.children.length).toBe(9); // Board should be reset
    const emptyCells = [...board.children].every(cell => !cell.textContent);
    expect(emptyCells).toBe(true); // All cells should be empty
    const newCurrentPlayer = getByText('X');
    expect(newCurrentPlayer).toBeTruthy(); // Current player should be reset to X
    const newWinMessage = getByText('X wins!');
    expect(newWinMessage).toBeFalsy(); // Winning message should disappear after reset
  });
});
