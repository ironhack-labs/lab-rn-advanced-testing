import type {GamePlayer} from '../types';

export type GameState = {
  board: Array<GamePlayer | null>;
  player: GamePlayer;
  winner: GamePlayer | null;
};

export const initialGameState: GameState = {
  board: Array(9).fill(null),
  player: 'X',
  winner: null,
};

export enum GAME_TYPES {
  RESET = 'RESET',
  MAKE_MOVE = 'MAKE_MOVE',
}

export type ResetAction = {
  type: GAME_TYPES.RESET;
};

export type MakeMoveAction = {
  type: GAME_TYPES.MAKE_MOVE;
  payload: {boardIndex: number};
};

type GameTypeActions = ResetAction | MakeMoveAction;

export const gameReducer = (
  state: GameState,
  action: GameTypeActions,
): GameState => {
  switch (action.type) {
    case GAME_TYPES.RESET:
      return initialGameState;
    case GAME_TYPES.MAKE_MOVE:
      // TODO: add logic for movement
      return {
        ...state,
      };
    default:
      return state;
  }
};
