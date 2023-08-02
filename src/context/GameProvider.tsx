import { createContext, PropsWithChildren, useContext, useEffect, useReducer } from "react";

const WINER_ARRAY = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

type GameProviderProps = PropsWithChildren<{}>

type GameState = {
    positionArray: Array<number> | [],
    winner: string,
    clickedPosition: (position: number) => void,
    gameStart: () => void,
}

type Action = | {
    type: 'START_GAME',
    payload: Array<number>
} |
{
    type: 'RESET_GAME',
} |
{
    type: 'SELECT_POSITION',
    payload: { position: number, player: number }
} |
{
    type: 'ADD_WINNER', payload: string
}

const initialState: GameState = {
    positionArray: [],
    winner: '',
    clickedPosition: () => { },
    gameStart: () => { }
}

const GameContext = createContext(initialState)

const reducer = (state: GameState, action: Action): GameState => {
    switch (action.type) {
        case 'START_GAME':
            return { ...state, positionArray: action.payload, winner: '' }
        case 'RESET_GAME':
            return { ...state }
        case 'SELECT_POSITION':
            return {
                ...state, positionArray: state.positionArray.map((n, index) => {
                    if (index === action.payload.position) return action.payload.player;
                    return n
                })
            }
        case 'ADD_WINNER':
            return { ...state, winner: action.payload }
    }
}

export const GameProvider = ({ children }: GameProviderProps) => {


    const [{ positionArray, winner }, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const noneValues = positionArray.filter(position => position !== 0)
        if (noneValues.length !== 9 && noneValues.length % 2 !== 0) {
            getRandomPosition();
        }
        checkPositionArray(noneValues.length)
    }, [positionArray])

    const checkPositionArray = (aux: number) => {
        let text: string = 'Draw';
        for (let arr of WINER_ARRAY) {
            if (positionArray[arr[0]] === positionArray[arr[1]] && positionArray[arr[1]] === positionArray[arr[2]] && 0 !== positionArray[arr[2]]) {
                if (positionArray[arr[0]] === 1) {
                    text = 'Player wins'
                    dispatch({ type: 'ADD_WINNER', payload: 'Player wins' })
                } else if (positionArray[arr[0]] === 2) {
                    dispatch({ type: 'ADD_WINNER', payload: 'AI wins' })
                }
            }
        }
        if (aux === 9) {
            dispatch({ type: 'ADD_WINNER', payload: text })
        }
    }

    const clickedPosition = (position: number) => {
        if (positionArray[position] === 0 && positionArray[position] !== 2) {
            dispatch({ type: 'SELECT_POSITION', payload: { position, player: 1 } })
        }
    }

    const getRandomPosition = () => {
        const player2Position: number = Math.round(Math.random() * 8);
        if (positionArray[player2Position] === 0) {
            dispatch({ type: 'SELECT_POSITION', payload: { position: player2Position, player: 2 } })
        } else {
            getRandomPosition();
        }
    }

    const gameStart = () => {
        dispatch({ type: 'START_GAME', payload: [0, 0, 0, 0, 0, 0, 0, 0, 0] })
    }

    const value = { positionArray, winner, clickedPosition, gameStart }
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}

export const useGameContext = () => {
    const gameContext = useContext(GameContext);
    if (!gameContext) {
        throw new Error('useAppCtx must be use within the AppCtxProvider');
    }
    return gameContext;
}

