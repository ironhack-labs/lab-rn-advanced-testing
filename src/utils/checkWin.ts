import { BoardState, Cell } from './types';

export function checkWin(board: BoardState, player: Cell): boolean {
  // Checking rows
  for (let i = 0; i < 3; i++) {
    if (board[i * 3] === player && board[i * 3 + 1] === player && board[i * 3 + 2] === player) {
      return true;
    }
  }

  // Checking columns
  for (let i = 0; i < 3; i++) {
    if (board[i] === player && board[i + 3] === player && board[i + 6] === player) {
      return true;
    }
  }

  // Checking diagonals
  if (board[0] === player && board[4] === player && board[8] === player) {
    return true;
  }

  if (board[2] === player && board[4] === player && board[6] === player) {
    return true;
  }

  return false;
}

export default checkWin;

const board: BoardState = [
  "O", null, null,
  null, "O", null,
  null, null, "O",
];

const player: Cell = "O";

const isWinner = checkWin(board, player);
