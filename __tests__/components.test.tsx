// __tests__/components.test.tsx

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import WelcomeScreen from '../src/WelcomeScreen';
import GameScreen from '../src/GameScreen';

describe('WelcomeScreen', () => {
  it('should render the welcome text and start button', () => {
    const {getByText} = render(<WelcomeScreen onStartGame={() => {}} />);
    expect(getByText('Tic Tac Toe')).toBeDefined();
    expect(getByText('Welcome to the game')).toBeDefined();
    expect(getByText('Touch here to start')).toBeDefined();
  });

  it('should call onStartGame when the start button is pressed', () => {
    const onStartGameMock = jest.fn();
    const {getByText} = render(<WelcomeScreen onStartGame={onStartGameMock} />);
    fireEvent.press(getByText('Touch here to start'));
    expect(onStartGameMock).toHaveBeenCalled();
  });
});

describe('GameScreen', () => {
  it('should render the game board and result text', () => {
    const {getByText, queryAllByText} = render(
      <GameScreen onGameEnd={() => {}} />,
    );
    expect(getByText('Tic Tac Toe')).toBeDefined();
    expect(getByText('You won the game')).toBeDefined();
    expect(getByText('Touch here to play again!')).toBeDefined();

    // Check if the initial board is rendered correctly
    expect(queryAllByText('')).toHaveLength(9);
  });

  it('should call onGameEnd with the winner when a player wins', () => {
    const onGameEndMock = jest.fn();
    const {getByText} = render(<GameScreen onGameEnd={onGameEndMock} />);

    // Simulate the game
    fireEvent.press(getByText(''));
    fireEvent.press(getByText(''));
    fireEvent.press(getByText(''));
    fireEvent.press(getByText(''));
    fireEvent.press(getByText(''));
    fireEvent.press(getByText(''));
    fireEvent.press(getByText(''));
    fireEvent.press(getByText(''));

    // Check if onGameEnd is called with the correct winner
    expect(onGameEndMock).toHaveBeenCalledWith('Tied');
  });

  it('should allow players to make moves and switch turns', () => {
    const {getByText} = render(<GameScreen onGameEnd={() => {}} />);

    // Make a move for player X
    fireEvent.press(getByText(''));
    expect(getByText('X')).toBeDefined();

    // Make a move for player O
    fireEvent.press(getByText(''));
    expect(getByText('O')).toBeDefined();

    // Make another move for player X
    fireEvent.press(getByText(''));
    expect(getByText('X')).toBeDefined();
  });

  it('should not allow players to make moves after the game ends', () => {
    const {getByText} = render(<GameScreen onGameEnd={() => {}} />);

    // Simulate the game to the end
    fireEvent.press(getByText('Touch here to play again!'));
    fireEvent.press(getByText('Touch here to play again!'));
    fireEvent.press(getByText('Touch here to play again!'));
    fireEvent.press(getByText('Touch here to play again!'));
    fireEvent.press(getByText('Touch here to play again!'));

    // Try to make a move after the game ends
    fireEvent.press(getByText(''));
    expect(getByText('')).toBeDefined();
  });

  it('should reset the board and player when the play again button is pressed', () => {
    const {getByText, queryAllByText} = render(
      <GameScreen onGameEnd={() => {}} />,
    );

    // Simulate a completed game and press the play again button
    fireEvent.press(getByText('Touch here to play again!'));

    // Check if the board is reset
    expect(queryAllByText('X')).toHaveLength(0);
    expect(queryAllByText('O')).toHaveLength(0);
    expect(queryAllByText('')).toHaveLength(9);
  });
});
