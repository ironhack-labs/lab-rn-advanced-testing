import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('should render the game board', () => {
    const {getByTestId} = render(<App />);
    const board = getByTestId('board');
    expect(board).toBeTruthy();
    expect(board.children.length).toBe(4);
  });

  it('should render the status text', () => {
    const {getByTestId} = render(<App />);
    const status = getByTestId('status');
    expect(status).toBeTruthy();

    expect(status.props.children).toBe('Next player: X');
  });

  it('should update the game state when a cell is tapped', () => {
    const {getAllByTestId, getByTestId} = render(<App />);
    const squares = getAllByTestId('square');
    fireEvent.press(squares[0]);
    waitFor(() => {
      expect(getByTestId('status').props.children).toBe('Next player: O');
    });
  });
});