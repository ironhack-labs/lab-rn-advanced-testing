import React from 'react';
import { render } from '@testing-library/react-native';
import Message from './Message';

test('renders message correctly for "WINNER" result', () => {
  const { getByText } = render(<Message result="WINNER" />);
  const messageText = getByText('¡Ganaste! ¡Felicidades!');
  expect(messageText).toBeTruthy();
});

test('renders message correctly for "LOSER" result', () => {
  const { getByText } = render(<Message result="LOSER" />);
  const messageText = getByText('Perdiste. ¡Inténtalo de nuevo!');
  expect(messageText).toBeTruthy();
});

test('renders message correctly for "TIE" result', () => {
  const { getByText } = render(<Message result="TIE" />);
  const messageText = getByText('Es un empate. ¡Buena partida!');
  expect(messageText).toBeTruthy();
});

test('renders default message for unknown result', () => {
  const { getByText } = render(<Message />);
  const messageText = getByText('Es tu turno');
  expect(messageText).toBeTruthy();
});
