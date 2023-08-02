import React from 'react';
import {it} from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import { Player } from '../Player';

describe('Testing Player component', () => {
  it('change turn from human to ai and viceversa', () => {
    const { getByText } = render(<Player />);

    expect(getByText('Current turn: human')).toBeTruthy();


    fireEvent.press(getByText('Change Turn'));

    expect(getByText('Current turn: Ai')).toBeTruthy();


    fireEvent.press(getByText('Change Turn'));

    expect(getByText('Current turn: human')).toBeTruthy();

  });
})