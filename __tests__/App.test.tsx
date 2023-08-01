import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('should render the title and player labels', () => {
    const {getByText} = render(<App />);
    const titleElement = getByText('Tic Tac Toe');
    const player1Label = getByText('X - Player 1');
    const player2Label = getByText('O - Player 2');

    expect(titleElement).toBeTruthy();
    expect(player1Label).toBeTruthy();
    expect(player2Label).toBeTruthy();
  });
});
