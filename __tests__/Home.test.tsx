import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Home } from '../src/screens/Home';

describe('Home', () => {
  it('debería mostrar el mensaje "Tic Tac Toe"', () => {
    const { getByText } = render(<Home />);
    const messageText = getByText('Tic Tac Toe');
    expect(messageText).toBeTruthy();
  });

  it('debería mostrar el mensaje de empate en el modal cuando no hay ganador', () => {
    const { getByText, getByTestId } = render(<Home />);
    const boardSpaces = [
      getByTestId('space-0'),
      getByTestId('space-1'),
      getByTestId('space-2'),
      getByTestId('space-3'),
      getByTestId('space-4'),
      getByTestId('space-5'),
      getByTestId('space-6'),
      getByTestId('space-7'),
      getByTestId('space-8'),
    ];

    fireEvent.press(boardSpaces[0]);
    fireEvent.press(boardSpaces[1]);
    fireEvent.press(boardSpaces[2]);
    fireEvent.press(boardSpaces[3]);
    fireEvent.press(boardSpaces[4]);
    fireEvent.press(boardSpaces[6]);
    fireEvent.press(boardSpaces[5]);
    fireEvent.press(boardSpaces[8]);
    fireEvent.press(boardSpaces[7]);

    const modalView = getByTestId('modal-view');
    expect(modalView).toBeVisible();

    const modalMessage = getByText('Tie Game!');
    expect(modalMessage).toBeTruthy();
  });
});
