import React from 'react';

import {TicTacToeCell} from './tic-tac-toe-cell';
import {render, screen, fireEvent} from '../../../../utils/test-utils';
import {GamePlayer} from '../../../types';

describe('<TicTacToeCell />', () => {
  describe('render', () => {
    it('should renders the button as primary if cell is available', () => {
      render(<TicTacToeCell index={0} />);
      const cell = screen.getByTestId('tic-tac-toe-cell');
      expect(cell).toHaveTextContent('');
    });

    it('should renders X text if user has seleceted the cell', () => {
      render(<TicTacToeCell index={0} />, {
        context: {
          board: [
            GamePlayer.player,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
        },
      });
      const cell = screen.getByTestId('tic-tac-toe-cell');
      expect(cell).toHaveTextContent(GamePlayer.player);
    });
  });

  describe('behavior', () => {
    let makePlayerMoveMock: jest.Mock;

    beforeEach(() => {
      makePlayerMoveMock = jest.fn();
    });

    it('should calls makePlayerMove action on button press', () => {
      render(<TicTacToeCell index={0} />, {
        context: {
          makePlayerMove: makePlayerMoveMock,
        },
      });
      const cell = screen.getByTestId('tic-tac-toe-cell');
      fireEvent.press(cell);
      expect(makePlayerMoveMock).toHaveBeenCalled();
    });

    it('should not allow button press when there is a winner', () => {
      render(<TicTacToeCell index={0} />, {
        context: {
          makePlayerMove: makePlayerMoveMock,
          winner: GamePlayer.player,
        },
      });
      const cell = screen.getByTestId('tic-tac-toe-cell');
      fireEvent.press(cell);
      expect(makePlayerMoveMock).not.toHaveBeenCalled();
    });

    it('should not allow button press when the cell is occupied', () => {
      render(<TicTacToeCell index={0} />, {
        context: {
          makePlayerMove: makePlayerMoveMock,
          board: [
            GamePlayer.player,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
        },
      });
      const cell = screen.getByTestId('tic-tac-toe-cell');
      fireEvent.press(cell);
      expect(makePlayerMoveMock).not.toHaveBeenCalled();
    });
  });
});
