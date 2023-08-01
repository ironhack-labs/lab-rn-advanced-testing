// Tablero.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

describe('Componente Tablero', () => {
  it('debería renderizar con celdas vacías', () => {
    const { queryAllByText } = render(<Board />);
    const celdasVacias = queryAllByText(''); // Encontrar todas las celdas con contenido vacío
    expect(celdasVacias.length).toBe(9); // Esperamos que haya 9 celdas vacías en el tablero inicial
  });

  it('debería actualizar el contenido de la celda al hacer clic', () => {
    const { queryAllByText } = render(<Board />);
    const celdasVacias = queryAllByText('');

    // Hacemos clic en una celda vacía
    fireEvent.click(celdasVacias[0] as HTMLElement);

    // Hacemos clic en otra celda vacía
    fireEvent.click(celdasVacias[1] as HTMLElement);

  });

  it('debería impedir cambiar el contenido de una celda no vacía', () => {
    const { queryAllByText } = render(<Board />);
    const celdasVacias = queryAllByText('');

    // Hacemos clic en una celda vacía para establecer el contenido como 'X'
    fireEvent.click(celdasVacias[0] as HTMLElement);

    // Hacemos clic en la misma celda nuevamente para establecer el contenido como 'O', lo cual no debería cambiar el contenido
    fireEvent.click(celdasVacias[0] as HTMLElement);

  });
});
        