import React from 'react';
import {Square} from '../../src/components/Square';
import {fireEvent, render, screen} from '@testing-library/react-native';

describe('Squire Tests', () => {
  it('renders correctly', () => {
    const mockOnPressFn = jest.fn();
    const randomValue = Math.floor(Math.random() * 9);

    render(
      <Square
        handleOnPress={mockOnPressFn}
        value={randomValue.toString()}
        x={0}
        y={0}
      />,
    );
  });

  it('call onPress event on square press', () => {
    const mockOnPressFn = jest.fn();
    const randomValue = Math.floor(Math.random() * 9);

    render(
      <Square
        handleOnPress={mockOnPressFn}
        value={randomValue.toString()}
        x={0}
        y={0}
      />,
    );

    const square = screen.getByTestId('square');
    fireEvent.press(square);
    expect(mockOnPressFn.mock.calls.length).toBe(1);
  });
});
