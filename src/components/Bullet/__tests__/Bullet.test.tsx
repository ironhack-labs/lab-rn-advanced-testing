import React from 'react';
import {it} from '@jest/globals';
import { render } from '@testing-library/react-native';
import { Bullet } from '../Bullet';


describe('Testing Bullet component', () => {
  it("renders the value prop as text", () => {
    const { getByText } = render(<Bullet value='X'/>);
    expect(getByText('X')).toBeTruthy();
  });

  it("renders the value prop as text", () => {
    const { getByText } = render(<Bullet value='O'/>);
    expect(getByText('O')).toBeTruthy();
  });
});
