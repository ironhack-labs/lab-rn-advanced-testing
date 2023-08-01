import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import OComponent from '../src/components/OComponent';

describe('OComponent', () => {
  beforeEach(() => {
    render(<OComponent color="blue" />);
  });

  describe('OComponent Render', () => {
    it('should render the O', () => {
      const oText = screen.getByText('O');

      expect(oText).toBeTruthy();
      expect(oText).toHaveStyle({ color: 'blue' });
    });
  });
});
