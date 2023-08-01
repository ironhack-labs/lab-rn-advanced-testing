import { createContext, PropsWithChildren } from "react";

const initialValue = {
    positionArray: Array<Array<number>>
}

type GameProviderProps = PropsWithChildren<{}>

const GameContext = createContext(initialValue)

const GameProvider = ({ children }: GameProviderProps) => {



}

const GameReducer = (state, action) => { }