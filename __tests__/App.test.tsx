import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('should render the title and player labels', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText('Tic Tac Toe');
    const player1Label = getByText('X - Player 1');
    const player2Label = getByText('O - Player 2');

    expect(titleElement).toBeTruthy();
    expect(player1Label).toBeTruthy();
    expect(player2Label).toBeTruthy();
  });

  it('should show result modal after winning', async () => {
    const { getByTestId, getByText } = render(<App />);
    const space0 = getByTestId('space-0');
    const space1 = getByTestId('space-1');
    const space3 = getByTestId('space-3');
    const space4 = getByTestId('space-4');
    const space6 = getByTestId('space-6');

    fireEvent.press(space0);
    fireEvent.press(space1);
    fireEvent.press(space3);
    fireEvent.press(space4);
    fireEvent.press(space6);

    await waitFor(() => {
      const resultModal = getByText('Congratulations Player 1!');
      expect(resultModal).toBeTruthy();
    });
  });

  it('should show result modal after winning', async () => {
    const { getByTestId, getByText } = render(<App />);
    const space0 = getByTestId('space-0');
    const space1 = getByTestId('space-1');
    const space3 = getByTestId('space-3');
    const space4 = getByTestId('space-4');
    const space6 = getByTestId('space-6');

    fireEvent.press(space0);
    fireEvent.press(space1);
    fireEvent.press(space3);
    fireEvent.press(space4);
    fireEvent.press(space6);

    await waitFor(() => {
      const resultModal = getByText('Congratulations Player 1!');
      expect(resultModal).toBeTruthy();
    });
  });

  it('should show result modal after tie game', async () => {
    const { getByTestId, getByText } = render(<App />);
    const space0 = getByTestId('space-0');
    const space1 = getByTestId('space-1');
    const space2 = getByTestId('space-2');
    const space5 = getByTestId('space-5');
    const space3 = getByTestId('space-3');
    const space4 = getByTestId('space-4');
    const space7 = getByTestId('space-7');
    const space6 = getByTestId('space-6');
    const space8 = getByTestId('space-8');

    fireEvent.press(space0);
    fireEvent.press(space1);
    fireEvent.press(space2);
    fireEvent.press(space5);
    fireEvent.press(space3);
    fireEvent.press(space4);
    fireEvent.press(space7);
    fireEvent.press(space6);
    fireEvent.press(space8);

    await waitFor(() => {
      const resultModal = getByText('Tie Game!');
      expect(resultModal).toBeTruthy();
    });
  });
});
