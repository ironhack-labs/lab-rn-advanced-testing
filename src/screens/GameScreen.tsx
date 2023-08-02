import React from "react"
import { View } from "react-native";
import GameHeader from "../components/GameHeader";
import GameWelcome from "../components/GameWelcome";
import GameBoard from "../components/GameBoard";
import { useGameContext } from "../context/GameProvider";



function GameScreen() {

    const { positionArray } = useGameContext()

    return (
        <View style={{backgroundColor: '#fff'}}>
            <GameHeader title={'Tic Tac Toe'} />
            {positionArray.length === 0 ?
                <GameWelcome /> :
                <GameBoard />}
        </View>
    )
}

export default GameScreen;