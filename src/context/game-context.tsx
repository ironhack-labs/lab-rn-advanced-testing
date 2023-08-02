import React, {ReactNode, createContext, useContext} from 'react';

import {
  GameContext,
  useContextGame,
  initialContextValue,
} from './use-game-context';

export const gameContext = createContext<GameContext>(initialContextValue);

export const GameProvider = ({children}: {children: ReactNode}) => {
  const {state, actions} = useContextGame();

  return (
    <gameContext.Provider
      value={{
        ...state,
        ...actions,
      }}>
      {children}
    </gameContext.Provider>
  );
};

export const useGameCtx = () => {
  const ctxValue = useContext(gameContext);

  if (ctxValue === initialContextValue) {
    throw new Error('gameContext must be use whitin the GameProvider');
  }

  return ctxValue;
};
