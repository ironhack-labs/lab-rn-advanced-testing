import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import XComponent from '../src/components/XComponet';

describe('XComponent', () => {
  beforeEach(() => {
    render(<XComponent color="red" />);
  });

  describe('XComponent Render', () => {
    it('should render the X', () => {
      const xText = screen.getByText('X');

      expect(xText).toBeTruthy();
      expect(xText).toHaveStyle({ color: 'red' });
    });
  });
});