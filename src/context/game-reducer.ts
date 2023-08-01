import {GamePlayer} from '../types';

export type GameState = {
  board: (GamePlayer | null)[];
  player: GamePlayer;
  winner: GamePlayer | 'tie' | null;
};

export const initialGameState: GameState = {
  board: Array(9).fill(null),
  player: GamePlayer.player,
  winner: null,
};

export enum GAME_TYPES {
  RESET = 'RESET',
  MAKE_PLAYER_MOVE = 'MAKE_PLAYER_MOVE',
  MAKE_COMPUTER_MOVE = 'MAKE_COMPUTER_MOVE',
}

export type ResetAction = {
  type: GAME_TYPES.RESET;
};

export type MakePlayerMoveAction = {
  type: GAME_TYPES.MAKE_PLAYER_MOVE;
  payload: {boardIndex: number};
};

export type MakeComputerMoveAction = {
  type: GAME_TYPES.MAKE_COMPUTER_MOVE;
};

type GameTypeActions =
  | ResetAction
  | MakePlayerMoveAction
  | MakeComputerMoveAction;

const checkWinner = (board: GameState['board']): GameState['winner'] => {
  const winningLinesCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of winningLinesCombination) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (!board.includes(null)) {
    return 'tie';
  }

  return null;
};

export const gameReducer = (
  state: GameState,
  action: GameTypeActions,
): GameState => {
  switch (action.type) {
    case GAME_TYPES.RESET:
      return initialGameState;
    case GAME_TYPES.MAKE_PLAYER_MOVE: {
      if (state.winner) {
        return state;
      }

      const index = action.payload.boardIndex;
      const isCellAvaible = state.board[index] === null;
      if (!isCellAvaible) {
        return state;
      }

      const newBoard = [...state.board];
      newBoard[index] = state.player;

      return {
        ...state,
        board: newBoard,
        player: GamePlayer.computer,
        winner: checkWinner(newBoard),
      };
    }
    case GAME_TYPES.MAKE_COMPUTER_MOVE: {
      if (state.winner) {
        return state;
      }

      const emptyCells = state.board.reduce((acc, cell, index) => {
        if (cell === null) {
          acc.push(index);
        }

        return acc;
      }, [] as number[]);

      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const randomCell = emptyCells[randomIndex];

      const newBoard = [...state.board];
      newBoard[randomCell] = state.player;

      return {
        ...state,
        board: newBoard,
        player: GamePlayer.player,
        winner: checkWinner(newBoard),
      };
    }
    default:
      return state;
  }
};
