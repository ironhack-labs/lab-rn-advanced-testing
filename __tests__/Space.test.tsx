import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Space from '../src/components/Space';

describe('Space', () => {
  it('debería llamar a la función setTurn al hacer clic en el espacio', () => {
    const mockSetTurn = jest.fn();

    const { getByTestId } = render(
      <Space spaceID={0} spaceValue="" setTurn={mockSetTurn} />
    );

    const space = getByTestId('space-0');

    fireEvent.press(space);

    expect(mockSetTurn).toHaveBeenCalledWith(0);
  });

  it('debería deshabilitar el espacio si ya tiene un valor', () => {
    const mockSetTurn = jest.fn();

    const { getByTestId } = render(
      <Space spaceID={1} spaceValue="X" setTurn={mockSetTurn} />
    );

    const space = getByTestId('space-1');

    fireEvent.press(space);

    expect(mockSetTurn).not.toHaveBeenCalled();
  });
});
