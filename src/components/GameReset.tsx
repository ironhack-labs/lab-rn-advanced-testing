import React from "react";
import { View } from "react-native";
import GameTitle from "./GameTitle";
import GameStart from "./GameStart";
import { useGameContext } from "../context/GameProvider";

const GameReset = () => {
    const { gameStart, winner } = useGameContext()

    return (
        <View testID="reset">
            <GameTitle title={winner} />
            <GameStart title={'Touch here to reset the game'} onPress={gameStart} />
        </View>
    )
}

export default GameReset;