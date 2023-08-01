import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TicTacToeBoard from '../TicTacToeBoard';

describe('Tic Tac Toe Board', () => {
  it('should render the Tic Tac Toe board with cells', () => {
    const {getByTestId} = render(<TicTacToeBoard />);
    const board = getByTestId('board');
    expect(board.children.length).toBe(9);
  });

  it('should switch players when tapping on cells', () => {
    const {getByTestId, getByText} = render(<TicTacToeBoard />);
    const cell1 = getByTestId('cell-1');
    fireEvent.press(cell1);
    const cell2 = getByTestId('cell-2');
    const cell1Pressed = getByText('X');
    expect(cell1Pressed).toBeTruthy();
  });

  it('should not allow tapping on an already filled cell', () => {
    const {getByTestId, getByText} = render(<TicTacToeBoard />);
    const cell1 = getByTestId('cell-1');
    fireEvent.press(cell1);
    const pressedCell = getByText('X');
    fireEvent.press(pressedCell);
    fireEvent.press(pressedCell);
    const cell1AfterTap = getByText('X');
    expect(cell1AfterTap).toBeTruthy();
  });

//   it('should display the winning message when there is a winner', () => {
//     const initialBoard = ['X', 'O', 'X', 'O', 'O', 'X', null, null, null];
//     const {getByText} = render(<TicTacToeBoard initialBoard={initialBoard} />);
//     fireEvent.press(getByText('X'));
//     const winMessage = getByText('X wins!');
//     expect(winMessage).toBeTruthy();
//   });

//   it("should display 'It's a draw!' message when the game ends in a draw", () => {
//     const initialBoard = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'];
//     const {getByText} = render(<TicTacToeBoard initialBoard={initialBoard} />);
//     const drawMessage = getByText("It's a draw!");
//     expect(drawMessage).toBeTruthy();
//   });

//   it('should reset the board and game state when clicking the "Play Again" button', () => {
//     const initialBoard = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'];
//     const {getByText, getByTestId} = render(
//       <TicTacToeBoard initialBoard={initialBoard} />,
//     );
//     fireEvent.press(getByText("It's a draw!")); // Trigger game end
//     const playAgainButton = getByText('Play Again');
//     fireEvent.press(playAgainButton);

//     const board = getByTestId('board');
//     expect(board.children.length).toBe(9);
//     const emptyCells = [...board.children].every(cell => !cell.textContent);
//     expect(emptyCells).toBe(true);
//     const newCurrentPlayer = getByText('X');
//     expect(newCurrentPlayer).toBeTruthy();
//     const newWinMessage = getByText('X wins!');
//     expect(newWinMessage).toBeFalsy();
//   });
});
