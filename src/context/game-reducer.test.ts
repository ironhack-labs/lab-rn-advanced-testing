import {GamePlayer} from '../types';
import {
  gameReducer,
  initialGameState,
  ResetAction,
  MakePlayerMoveAction,
  MakeComputerMoveAction,
  GAME_TYPES,
  GameState,
} from './game-reducer';

describe('gameReducer', () => {
  let state: GameState;
  const boardAboutToTie: GameState['board'] = [
    null,
    GamePlayer.player,
    GamePlayer.computer,
    GamePlayer.computer,
    GamePlayer.player,
    GamePlayer.player,
    GamePlayer.player,
    GamePlayer.computer,
    GamePlayer.computer,
  ];

  describe('@reset', () => {
    const resetAction: ResetAction = {
      type: GAME_TYPES.RESET,
    };

    it('should reset state to initialState', () => {
      state = {
        ...initialGameState,
        winner: GamePlayer.player,
      };
      const newSate = gameReducer(state, resetAction);
      expect(newSate).toEqual(initialGameState);
    });
  });

  describe('@make_player_move', () => {
    const movePlayerAction = (boardIndex: number): MakePlayerMoveAction => ({
      type: GAME_TYPES.MAKE_PLAYER_MOVE,
      payload: {boardIndex},
    });

    it('should marks with"X" the cell selected', () => {
      const indexSelected = 1;
      const newSate = gameReducer(
        initialGameState,
        movePlayerAction(indexSelected),
      );
      expect(newSate.board[indexSelected]).toBe(GamePlayer.player);
    });

    it('should return "X" as the winner if user connect a line', () => {
      state = {
        ...initialGameState,
        board: [
          null,
          GamePlayer.player,
          GamePlayer.player,
          GamePlayer.computer,
          GamePlayer.computer,
          null,
          null,
          null,
          null,
        ],
      };
      const newSate = gameReducer(state, movePlayerAction(0));

      expect(newSate.winner).toBe(GamePlayer.player);
    });

    it('should not do anything if there is a winner already', () => {
      state = {
        ...initialGameState,
        winner: GamePlayer.player,
      };
      const newSate = gameReducer(state, movePlayerAction(0));

      expect(newSate).toEqual(state);
    });

    it('should not do anything if the cell already has value', () => {
      state = {
        ...initialGameState,
        board: [
          GamePlayer.computer,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
      };
      const newSate = gameReducer(state, movePlayerAction(0));

      expect(newSate).toEqual(state);
    });

    it('should return "tie" as the winner if the any player dont connect a line and the baord is full', () => {
      state = {
        ...initialGameState,
        board: boardAboutToTie,
      };
      const newSate = gameReducer(state, movePlayerAction(0));

      expect(newSate.winner).toEqual('tie');
    });
  });

  describe('@make_computer_move', () => {
    const indexSelected = 0;
    const moveComputerAction: MakeComputerMoveAction = {
      type: GAME_TYPES.MAKE_COMPUTER_MOVE,
    };

    beforeEach(() => {
      jest.spyOn(Math, 'random').mockReturnValue(indexSelected);
    });

    it('should marks with "O" the cell selected', () => {
      const newSate = gameReducer(initialGameState, moveComputerAction);
      expect(newSate.board[indexSelected]).toBe(GamePlayer.computer);
    });

    it('should return "O" as the winner if computer connect a line', () => {
      state = {
        ...initialGameState,
        board: [
          null,
          GamePlayer.computer,
          GamePlayer.computer,
          GamePlayer.player,
          GamePlayer.player,
          null,
          null,
          null,
          null,
        ],
      };
      const newSate = gameReducer(state, moveComputerAction);

      expect(newSate.winner).toBe(GamePlayer.computer);
    });

    it('should not do anything if there is a winner already', () => {
      state = {
        ...initialGameState,
        winner: GamePlayer.computer,
      };
      const newSate = gameReducer(state, moveComputerAction);

      expect(newSate).toEqual(state);
    });

    it('should return "tie" as the winner if the any player dont connect a line and the baord is full', () => {
      state = {
        ...initialGameState,
        board: boardAboutToTie,
      };
      const newSate = gameReducer(state, moveComputerAction);

      expect(newSate.winner).toEqual('tie');
    });
  });
});
