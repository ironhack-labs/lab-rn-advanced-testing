import React, {ReactNode, createContext, useContext, useReducer} from 'react';

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

type GameContext = GameState & GameContextActions;
const initialContextValue: GameContext = {
  ...initialGameState,
  resetGame: () => null,
  makePlayerMove: () => null,
  makeComputerMove: () => null,
};

const GameContext = createContext<GameContext>(initialContextValue);

export const GameProvider = ({children}: {children: ReactNode}) => {
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
