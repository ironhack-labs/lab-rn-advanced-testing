import React, {ReactNode, createContext, useContext, useReducer} from 'react';

import {
  gameReducer,
  initialGameState,
  GameState,
  GAME_TYPES,
} from './game-reducer';

type GameContextActions = {
  resetGame: () => void;
  makeMove: (boardIndex: number) => void;
};

type GameContext = GameState & GameContextActions;
const initialContextValue: GameContext = {
  ...initialGameState,
  resetGame: () => null,
  makeMove: () => null,
};

const GameContext = createContext<GameContext>(initialContextValue);

export const GameProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const actions: GameContextActions = {
    resetGame: () => {
      dispatch({type: GAME_TYPES.RESET});
    },
    makeMove: boardIndex => {
      dispatch({type: GAME_TYPES.MAKE_MOVE, payload: {boardIndex}});
    },
  };

  return (
    <GameContext.Provider
      value={{
        ...state,
        ...actions,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameCtx = () => {
  const ctxValue = useContext(GameContext);

  if (!ctxValue) {
    throw new Error('gameContext must be use whitin the AppProvider');
  }

  return ctxValue;
};
