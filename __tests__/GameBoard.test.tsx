
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
    it('renders correctly', () => {
        const { getByTestId } = render(<GameBoard />)
        const gameBoard = getByTestId('board')
        expect(gameBoard).toBeDefined()
        expect(gameBoard).not.toBe(undefined);
    });
})