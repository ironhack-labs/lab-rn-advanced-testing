
/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { it, describe, expect } from '@jest/globals';

import { render } from '@testing-library/react-native';
import GameHeader from '../src/components/GameHeader';


describe('Render Game Header', () => {

    const setUp = () => render(<GameHeader title='Tic Tac Toe' />);

    it('renders correctly', () => {
        const { getByTestId } = setUp()
        const gameHeader = getByTestId('header')
        expect(gameHeader).toBeDefined()
        expect(gameHeader).not.toBe(undefined);
    });

    it('render title correctly', () => {
        const { getByTestId } = setUp()
        const gameHeaderTitle = getByTestId('title');
        expect(gameHeaderTitle).toHaveTextContent('Tic Tac Toe')
    })
})