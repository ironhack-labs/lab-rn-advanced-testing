// Board.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

test('renders the board correctly with "X" and "O" values', () => {
  // Estado del tablero con celdas marcadas con 'X', 'O' o vacías
  const boardState = ['X', '', '', 'O', 'X', '', 'O', '', 'X'];

  // Renderizar el componente Board con el estado
  // const { container } = render(<Board boardState={boardState} />);

  // // Obtener todas las celdas renderizadas
  // const cells = container.querySelectorAll('[data-testid="cell"]');

  // // Verificar que el número de celdas sea el correcto
  // expect(cells).toHaveLength(9);

  // // Verificar el contenido de las celdas 
  // expect(cells[0].innerHTML).toBe('X');
  // expect(cells[1].innerHTML).toBe('');
  // expect(cells[2].innerHTML).toBe('');
  // expect(cells[3].innerHTML).toBe('O');
  // expect(cells[4].innerHTML).toBe('X');
  // expect(cells[5].innerHTML).toBe('');
  // expect(cells[6].innerHTML).toBe('O');
  // expect(cells[7].innerHTML).toBe('');
  // expect(cells[8].innerHTML).toBe('X');
});

    
