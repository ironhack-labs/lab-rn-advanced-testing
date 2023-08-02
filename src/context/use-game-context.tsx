import {useReducer} from 'react';

import {
  gameReducer,
  initialGameState,
  GameState,
  GAME_TYPES,
} from './game-reducer';

type GameContextActions = {
  resetGame: () => void;
  makePlayerMove: (boardIndex: number) => void;
  makeComputerMove: () => void;
};

export type GameContext = GameState & GameContextActions;
export const initialContextValue: GameContext = {
  ...initialGameState,
  resetGame: () => null,
  makePlayerMove: () => null,
  makeComputerMove: () => null,
};

export const useContextGame = () => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const actions: GameContextActions = {
    resetGame: () => {
      dispatch({type: GAME_TYPES.RESET});
    },
    makePlayerMove: boardIndex => {
      dispatch({type: GAME_TYPES.MAKE_PLAYER_MOVE, payload: {boardIndex}});
    },
    makeComputerMove: () => {
      dispatch({type: GAME_TYPES.MAKE_COMPUTER_MOVE});
    },
  };

  return {
    state,
    actions,
  };
};
