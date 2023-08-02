import React from "react";
import { View } from "react-native";
import GameTitle from "./GameTitle";
import GameStart from "./GameStart";
import { useGameContext } from "../context/GameProvider";

const GameWelcome = () => {

    const { gameStart } = useGameContext()

    return (
        <View testID="welcome">
            <GameTitle title={'Wellcome to the game!'} />
            <GameStart title={'Touch here to start the game'} onPress={gameStart} />
        </View>
    )
}
export default GameWelcome