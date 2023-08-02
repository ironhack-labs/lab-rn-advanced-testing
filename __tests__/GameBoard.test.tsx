
/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { it, describe, expect } from '@jest/globals';

import { render } from '@testing-library/react-native';
import GameBoard from '../src/components/GameBoard';


describe('Render Game Board', () => {
    const setUp = () => render(<GameBoard />);

    it('renders correctly', () => {
        const { getByTestId } = setUp();
        const gameBoard = getByTestId('board');
        expect(gameBoard).toBeDefined();
        expect(gameBoard).not.toBe(undefined);
    });
    it('render 9 cells', () => {
        const { getAllByTestId } = setUp()
        const gameCells = getAllByTestId('cell');
        expect(gameCells.length).toBe(9);
    })
})