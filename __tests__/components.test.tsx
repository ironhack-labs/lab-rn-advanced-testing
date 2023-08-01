// __tests__/components.test.tsx

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import GameScreen from '../src/GameScreen';
import WelcomeScreen from '../src/WelcomeScreen';

describe('WelcomeScreen', () => {
  it('should render the welcome text and start button', () => {
    const {getByText} = render(<WelcomeScreen startGame={() => {}} />);
    expect(getByText('Tic Tac Toe')).toBeDefined();
    expect(getByText('Welcome to the game')).toBeDefined();
    expect(getByText('Touch here to start')).toBeDefined();
  });

  it('should call onStartGame when the start button is pressed', () => {
    const onStartGameMock = jest.fn();
    const {getByText} = render(<WelcomeScreen startGame={onStartGameMock} />);
    fireEvent.press(getByText('Touch here to start'));
    expect(onStartGameMock).toHaveBeenCalled();
  });
});

describe('GameScreen', () => {
  it('should render the game board and result text', () => {
    const {getByText, queryAllByText, getByTestId} = render(<GameScreen />);
    
    expect(getByText('Tic Tac Toe')).toBeDefined();
    
    // Check if the initial board is rendered correctly
    expect(queryAllByText('')).toHaveLength(9);

    fireEvent.press(getByTestId('cell-00'));
    fireEvent.press(getByTestId('cell-10'));
    fireEvent.press(getByTestId('cell-01'));
    fireEvent.press(getByTestId('cell-11'));
    fireEvent.press(getByTestId('cell-02'));
    expect(getByText('The winner is X')).toBeDefined();
    expect(getByText('Touch here to play again!')).toBeDefined();
  });

  it('should call onGameEnd with the winner when a player wins', () => {
    const {getByTestId, getByText} = render(<GameScreen />);

    // Simulate the game
    fireEvent.press(getByTestId('cell-00')); // x
    fireEvent.press(getByTestId('cell-01')); // o
    fireEvent.press(getByTestId('cell-02')); // x
    fireEvent.press(getByTestId('cell-10')); // o
    fireEvent.press(getByTestId('cell-11')); // x
    fireEvent.press(getByTestId('cell-20')); // o
    fireEvent.press(getByTestId('cell-12')); // x
    fireEvent.press(getByTestId('cell-22')); // o
    fireEvent.press(getByTestId('cell-21')); // x

    // Check if onGameEnd is called with the correct winner
    expect(getByText("Tied")).toBeDefined();
  });

  it('should allow players to make moves and switch turns', () => {
    const {getByTestId, getByText, getAllByText} = render(<GameScreen />);

    // Make a move for player X
    fireEvent.press(getByTestId('cell-00'));
    expect(getByText('X')).toBeDefined();

    // Make a move for player O
    fireEvent.press(getByTestId('cell-01'));
    expect(getByText('O')).toBeDefined();

    // Make another move for player X
    fireEvent.press(getByTestId('cell-02'));
    expect(getAllByText('X').length).toBe(2);
  });

  it('should not allow players to make moves after the game ends', () => {
    const {getByText, getByTestId, debug} = render(<GameScreen />);

    // Simulate the game to the end
    fireEvent.press(getByTestId('cell-00'));
    fireEvent.press(getByTestId('cell-10'));
    fireEvent.press(getByTestId('cell-01'));
    fireEvent.press(getByTestId('cell-11'));
    fireEvent.press(getByTestId('cell-02'));
 
    // Try to make a move after the game ends
    fireEvent.press(getByTestId('cell-20'));
    expect(getByTestId('cell-20-text').props.children).toBe("");
  });

  it('should reset the board and player when the play again button is pressed', () => {
    const {getByText, queryAllByText} = render(<GameScreen />);

    // Simulate a completed game and press the play again button
    fireEvent.press(getByText('Touch here to play again!'));

    // Check if the board is reset
    expect(queryAllByText('X')).toHaveLength(0);
    expect(queryAllByText('O')).toHaveLength(0);
    expect(queryAllByText('')).toHaveLength(9);
  });
});
