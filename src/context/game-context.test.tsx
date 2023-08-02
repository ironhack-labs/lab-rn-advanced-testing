import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Text} from 'react-native';

import {useGameCtx, GameProvider} from './game-context';

describe('game-context', () => {
  describe('<GameProvider />', () => {
    it('should render children in GameProvider', () => {
      render(
        <GameProvider>
          <Text testID="demo">demo text</Text>
        </GameProvider>,
      );

      expect(screen.getByTestId('demo')).toHaveTextContent('demo text');
    });
  });

  describe('useGameCtx', () => {
    const DemoComponent = () => {
      useGameCtx();

      return null;
    };
    const original = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = original;
    });

    it('should return error when its not wrapped with GameProvider', () => {
      try {
        render(<DemoComponent />);
      } catch (err) {
        if (err instanceof Error) {
          expect(err.message).toBe(
            'gameContext must be use whitin the GameProvider',
          );
        }
      }
    });
  });
});
