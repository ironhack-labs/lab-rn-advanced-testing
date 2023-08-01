import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Board from '../src/components/Board';

describe('Board', () => {
  it('debería llamar a la función onTurn al hacer clic en un espacio vacío', () => {
    // Hacemos el mock de nuestro component
    const mockOnTurn = jest.fn();

    const {getByTestId} = render(
      <Board
        turns={{
          0: '',
          1: 'X',
          2: '',
          3: '',
          4: '',
          5: '',
          6: 'O',
          7: '',
          8: '',
        }}
        onTurn={mockOnTurn}
      />,
    );

    // Buscamos un espacio vacio
    const emptySpace = getByTestId('space-0');

    // Hacemos un evento en nuestro espacio vacio
    fireEvent.press(emptySpace);

    // Verifiacomos si nuestra funcion es llamada
    expect(mockOnTurn).toHaveBeenCalledWith(0);
  });

  it('no debería llamar a la función onTurn al hacer clic en un espacio ocupado', () => {
    const mockOnTurn = jest.fn();

    const {getByTestId} = render(
      <Board
        turns={{
          0: '',
          1: 'X',
          2: '',
          3: '',
          4: '',
          5: '',
          6: 'O',
          7: '',
          8: '',
        }}
        onTurn={mockOnTurn}
      />,
    );

    const occupiedSpace = getByTestId('space-1');

    fireEvent.press(occupiedSpace);

    expect(mockOnTurn).not.toHaveBeenCalled();
  });
});
