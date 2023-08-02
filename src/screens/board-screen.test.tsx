import React from 'react';
import {render, screen} from '../../utils/test-utils';

import {BoardScreen} from './board-screen';

describe('BoardScreen', () => {
  beforeEach(() => {
    render(<BoardScreen />);
  });

  it('should render the title', () => {
    expect(screen.getByText('Tic Tac Toe Game')).toBeDefined();
  });

  it('should renders 9 cells', () => {
    expect(screen.getAllByTestId('tic-tac-toe-cell')).toHaveLength(9);
  });
});
