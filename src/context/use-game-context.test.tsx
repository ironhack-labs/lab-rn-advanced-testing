import {renderHook, act} from '@testing-library/react-native';

import {initialGameState} from './game-reducer';
import {useContextGame} from './use-game-context';
import {GamePlayer} from '../types';

describe('useContextGame', () => {
  it('should returns initial state', () => {
    const {result} = renderHook(() => useContextGame());

    expect(result.current.state).toEqual(initialGameState);
  });

  it('should reset state', () => {
    const {result} = renderHook(() => useContextGame());

    act(() => {
      result.current.actions.resetGame();
    });

    expect(result.current.state).toEqual(initialGameState);
  });

  it('should make player move', () => {
    const {result} = renderHook(() => useContextGame());

    act(() => {
      result.current.actions.makePlayerMove(0);
    });

    expect(result.current.state.board['0']).toBe(GamePlayer.player);
  });

  it('should make computer move', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0);

    const {result} = renderHook(() => useContextGame());

    act(() => {
      result.current.actions.makeComputerMove();
    });

    expect(result.current.state.board['0']).toBe(GamePlayer.computer);
  });
});
