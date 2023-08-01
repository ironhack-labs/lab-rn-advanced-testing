import {
  CellValue,
  GameStatus,
  initializeGameBoard,
  checkWinner,
  checkDraw,
  togglePlayer,
} from '../src/gameLogic';
import { render, fireEvent } from '@testing-library/react-native';
import Board from '../src/components/Board';
import Cell from '../src/components/Cell';
// Test para la funcion initializeGameBoard
test('initializeGameBoard should return an empty 3x3 board', () => {
  const emptyBoard = initializeGameBoard();

  // Check if the board is 3x3 and all cells are initialized as Empty
  expect(emptyBoard).toHaveLength(3);
  expect(emptyBoard.every((row) => row.length === 3)).toBe(true);
  expect(emptyBoard.flat().every((cell) => cell === CellValue.Empty)).toBe(true);
});








