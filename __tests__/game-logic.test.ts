import {calculateWinner, isBoardFull} from '../src/utils/tic-tac-toe';

describe('game logic', () => {
  describe('calculate winner', () => {
    it('should return that O is the winner with horizontal line', () => {
      const board = [
        ['O', 'O', 'O'],
        ['X', 'X', ''],
        ['X', '', ''],
      ];

      expect(calculateWinner(board.flat())).toBe('O');
    });

    it('should return that O is the winner with diagonal line', () => {
      const board = [
        ['O', '', ''],
        ['X', 'O', ''],
        ['X', '', 'O'],
      ];

      expect(calculateWinner(board.flat())).toBe('O');
    });

    it('should return that X is the winner with vertical line', () => {
      const board = [
        ['X', 'O', ''],
        ['X', 'O', ''],
        ['X', '', ''],
      ];

      expect(calculateWinner(board.flat())).toBe('X');
    });

    it('should return null, since there is no winner', () => {
      const board = [
        ['X', 'X', '0'],
        ['O', 'O', 'X'],
        ['X', 'O', 'X'],
      ];

      expect(calculateWinner(board.flat())).toBe(null);
    });
  });

  describe('board is full', () => {
    it('should return true since the board is full', () => {
      const board = [
        ['X', 'X', '0'],
        ['O', 'O', 'X'],
        ['X', 'O', 'X'],
      ];

      expect(isBoardFull(board)).toBe(true);
    });

    it('should return false since the board is partially filled', () => {
      const board = [
        ['X', 'O', ''],
        ['X', 'O', ''],
        ['X', '', ''],
      ];

      expect(isBoardFull(board)).toBe(false);
    });

    it('should return false since the board is empty', () => {
      const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];

      expect(isBoardFull(board)).toBe(false);
    });
  });
});
