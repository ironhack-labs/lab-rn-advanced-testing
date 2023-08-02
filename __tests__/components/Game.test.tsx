import React from 'react';
import {
  waitFor,
  render,
  screen,
  fireEvent,
} from '@testing-library/react-native';
import {Game} from '../../src/components/Game';

describe('Game Test', () => {
  it('display squares with initial state', async () => {
    const {queryAllByTestId} = render(<Game />);

    const squaresValues = await waitFor(() => queryAllByTestId('square-value'));

    expect(squaresValues.length).toBe(9);
    squaresValues.forEach(square => {
      expect(square.children.toString()).toEqual('');
    });
  });

  it('X as winner', async () => {
    render(<Game />);

    const squares = screen.queryAllByTestId('square');

    fireEvent.press(squares[0]);
    fireEvent.press(squares[3]);
    fireEvent.press(squares[1]);
    fireEvent.press(squares[4]);
    fireEvent.press(squares[2]);

    await waitFor(() => {
      expect(screen.getByTestId('winner').children.toString()).toBe(
        'Winner: X',
      );
    });
  });

  it('O as winner', async () => {
    render(<Game />);

    const squares = screen.queryAllByTestId('square');

    fireEvent.press(squares[0]);
    fireEvent.press(squares[6]);
    fireEvent.press(squares[1]);
    fireEvent.press(squares[7]);
    fireEvent.press(squares[3]);
    fireEvent.press(squares[8]);

    await waitFor(() => {
      expect(screen.getByTestId('winner').children.toString()).toBe(
        'Winner: O',
      );
    });
  });
});
