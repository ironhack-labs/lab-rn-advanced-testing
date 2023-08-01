import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import App from '../App';

describe('Game Tic Tac Toe', () => {
  it('should render the game board with the expected UI elements', () => {
    const {getByTestId} = render(<App />);
    const board = getByTestId('board');
    const status = getByTestId('status');
    expect(board).toBeTruthy();
    expect(status).toBeTruthy();
    expect(status.props.children).toEqual('Next player: X');
  });

  it('should render rows of the game board', () => {
    const {getByTestId} = render(<App />);
    const board = getByTestId('board');
    expect(board).toBeTruthy();
    expect(board.children.length).toBe(3);
  });

  it('should allow users to tap on cells to make moves', async () => {
    const {getByTestId} = render(<App />);
    const square0 = getByTestId('square-0');
    fireEvent.press(square0);
    await waitFor(() => {
      expect(getByTestId('status').props.children).toBe('Next player: O');
    });
  });

  it('should update the game state when a move is made', async () => {
    const {getByTestId} = render(<App />);
    const square0 = getByTestId('square-0');
    fireEvent.press(square0);
    await waitFor(() => {
      expect(getByTestId('square-text-0').props.children).toBe('X');
    });
  });

  it('should detect a winner when the game is over', async () => {
    const {getByTestId} = render(<App />);
    const square0 = getByTestId('square-0');
    const square1 = getByTestId('square-1');
    const square4 = getByTestId('square-4');
    const square7 = getByTestId('square-7');
    const square8 = getByTestId('square-8');
    fireEvent.press(square0);
    fireEvent.press(square1);
    fireEvent.press(square4);
    fireEvent.press(square7);
    fireEvent.press(square8);

    await waitFor(() => {
      expect(getByTestId('status').props.children).toBe('Winner: X');
    });
  });
});
