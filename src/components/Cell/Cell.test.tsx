// src/components/Cell.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Cell from './Cell';

describe('iteration 2 test cells', () => {
  test('renders cell correctly with X value', () => {
    const { getByText } = render(<Cell value="X" />);
    const cellText = getByText('X');
    expect(cellText).toBeTruthy();
  });

  test('renders cell correctly with O value', () => {
    const { getByText } = render(<Cell value="O" />);
    const cellText = getByText('O');
    expect(cellText).toBeTruthy();
  });

  test('calls the onPress function when the cell is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<Cell value="X" onPress={mockOnPress} />);
    const cell = getByText('X');
    fireEvent.press(cell);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
