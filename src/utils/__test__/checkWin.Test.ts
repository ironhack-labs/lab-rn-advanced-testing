import checkWin from '../checkWin';
import { BoardState, Cell } from '../types';

describe('checkWin', () => {
  //debería devolver verdadero cuando hay una fila ganadora
  test('should return true when there is a winning row', () => {
    const board: BoardState = [
      "O", "O", "O",
      null, null, null,
      null, null, null,
    ];
    const player: Cell = "O";
    expect(checkWin(board, player)).toBe(true);
  });
//debería devolver verdadero cuando hay una columna ganadora
  test('should return true when there is a winning column', () => {
    const board: BoardState = [
      "O", null, null,
      "O", null, null,
      "O", null, null,
    ];
    const player: Cell = "O";
    expect(checkWin(board, player)).toBe(true);
  });
//debería devolver verdadero cuando hay una diagonal ganadora
  test('should return true when there is a winning diagonal', () => {
    const board: BoardState = [
      "O", null, null,
      null, "O", null,
      null, null, "O",
    ];
    const player: Cell = "O";
    expect(checkWin(board, player)).toBe(true);
  });
  // debería devolver falso cuando no hay ninguna combinación ganadora
  test('should return false when there is no winning combination', () => {
    const board: BoardState = [
      "O", null, null,
      null, "X", null,
      null, null, "O",
    ];
    const player: Cell = "O";
    expect(checkWin(board, player)).toBe(false);
  });
//debería devolver falso cuando el tablero está vacío
  test('should return false when the board is empty', () => {
    const board: BoardState = [
      null, null, null,
      null, null, null,
      null, null, null,
    ];
    const player: Cell = "O";
    expect(checkWin(board, player)).toBe(false);
  });
});
