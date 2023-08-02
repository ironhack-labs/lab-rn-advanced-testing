
/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { it, describe, expect } from '@jest/globals';

import { fireEvent, render } from '@testing-library/react-native';
import GameCell from '../src/components/GameCell';


describe('Render Game Cell', () => {
    const mockFunction = jest.fn()
    const setUp = () => render(<GameCell position={0} onPress={mockFunction} />)
    it('renders correctly', () => {
        const { getByTestId } = setUp();
        const gameCell = getByTestId('cell');
        expect(gameCell).toBeDefined();
        expect(gameCell).not.toBe(undefined);
    });
    it('Render text correctly', () => {
        const { getByTestId } = setUp();
        const gameCellText = getByTestId('text');
        expect(gameCellText).toHaveTextContent('');
    })
    it('On press called correctly', () => {
        const { getByTestId } = setUp();
        const gameCellTouchable = getByTestId('cell');
        fireEvent.press(gameCellTouchable);
        expect(mockFunction).toBeCalledTimes(1)
    })
})