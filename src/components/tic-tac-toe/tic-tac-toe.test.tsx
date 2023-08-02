import React from 'react';

import {TiTacToe} from './tic-tac-toe';
import {render, screen, fireEvent} from '../../../utils/test-utils';
import {GamePlayer} from '../../types';

describe('<TicTacToe />', () => {
  it('should calls makeComputerMove when current player is computer and there is no winner after 500ms', () => {
    jest.useFakeTimers();
    const makeComputerMoveMock = jest.fn();
    render(<TiTacToe />, {
      context: {
        player: GamePlayer.computer,
        makeComputerMove: makeComputerMoveMock,
      },
    });

    jest.advanceTimersByTime(500);

    expect(makeComputerMoveMock).toHaveBeenCalled();
  });

  describe('when there is a winner', () => {
    it('should renders the winner symbol', () => {
      render(<TiTacToe />, {
        context: {
          winner: GamePlayer.player,
        },
      });
      const text = screen.getByText(`The winner is: ${GamePlayer.player}`);
      expect(text).toBeDefined();
    });

    it('should renders "Nobody wins" when is a tie', () => {
      render(<TiTacToe />, {
        context: {
          winner: 'tie',
        },
      });
      const text = screen.getByText('Nobody wins :(');
      expect(text).toBeDefined();
    });

    it('should calls resetGame action on reset button press', () => {
      const resetGameMock = jest.fn();
      render(<TiTacToe />, {
        context: {
          winner: 'tie',
          resetGame: resetGameMock,
        },
      });
      const resetButton = screen.getByTestId('reset-button');
      fireEvent.press(resetButton);
      expect(resetGameMock).toHaveBeenCalled();
    });
  });
});
