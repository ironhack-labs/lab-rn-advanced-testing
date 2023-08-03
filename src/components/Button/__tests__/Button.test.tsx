import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';


describe('Testing Button component', () => {
  it("calls onPress callback prop when pressed", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onPress={handleClick}/>)

    fireEvent.press(getByText('Press to start'))

    expect(handleClick).toHaveBeenCalled();
  });
});
