// __tests__/gameLogic.test.ts

import {isBoardFull, checkWinner} from '../src/gameLogic';

describe('Game Logic', () => {
  describe('isBoardFull', () => {
    it('should return true for a full board', () => {
      const fullBoard = [
        ['X', 'O', 'X'],
        ['X', 'O', 'O'],
        ['O', 'X', 'X'],
      ];
      expect(isBoardFull(fullBoard)).toBe(true);
    });

    it('should return false for an empty board', () => {
      const emptyBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      expect(isBoardFull(emptyBoard)).toBe(false);
    });

    it('should return false for a partially filled board', () => {
      const partialBoard = [
        ['X', 'O', ''],
        ['', '', 'O'],
        ['X', 'X', 'O'],
      ];
      expect(isBoardFull(partialBoard)).toBe(false);
    });
  });

  describe('checkWinner', () => {
    it('should return X as the winner when X wins vertically', () => {
      const xWinsVertically = [
        ['X', 'O', 'O'],
        ['X', 'O', 'X'],
        ['X', 'X', 'O'],
      ];
      expect(checkWinner(xWinsVertically)).toBe('X');
    });

    it('should return O as the winner when O wins horizontally', () => {
      const oWinsHorizontally = [
        ['X', 'X', ''],
        ['O', 'O', 'O'],
        ['X', '', 'X'],
      ];
      expect(checkWinner(oWinsHorizontally)).toBe('O');
    });

    it('should return X as the winner when X wins diagonally', () => {
      const xWinsDiagonally = [
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', '', 'X'],
      ];
      expect(checkWinner(xWinsDiagonally)).toBe('X');
    });

    it('should return null for an ongoing game', () => {
      const ongoingGame = [
        ['X', 'O', ''],
        ['', 'O', 'X'],
        ['', '', ''],
      ];
      expect(checkWinner(ongoingGame)).toBe(null);
    });

    it('should return Tied for a tied game', () => {
      const tiedGame = [
        ['X', 'O', 'X'],
        ['X', 'O', 'O'],
        ['O', 'X', 'X'],
      ];
      expect(checkWinner(tiedGame)).toBe("Tied");
    });
  });
});
