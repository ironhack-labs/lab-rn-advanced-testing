import React from "react";
import { StyleSheet, View } from "react-native";
import GameCell from "./GameCell";
import GameReset from "./GameReset";
import { useGameContext } from "../context/GameProvider";

const GameBoard = () => {

    const { clickedPosition, positionArray, winner } = useGameContext()

    return <View testID="board" style={style.container}>
        <View style={style.containerRow}>
            <GameCell position={positionArray[0]} onPress={() => clickedPosition(0)} />
            <GameCell position={positionArray[1]} onPress={() => clickedPosition(1)} />
            <GameCell position={positionArray[2]} onPress={() => clickedPosition(2)} />
        </View>
        <View style={style.containerRow}>
            <GameCell position={positionArray[3]} onPress={() => clickedPosition(3)} />
            <GameCell position={positionArray[4]} onPress={() => clickedPosition(4)} />
            <GameCell position={positionArray[5]} onPress={() => clickedPosition(5)} />
        </View>
        <View style={style.containerRow}>
            <GameCell position={positionArray[6]} onPress={() => clickedPosition(6)} />
            <GameCell position={positionArray[7]} onPress={() => clickedPosition(7)} />
            <GameCell position={positionArray[8]} onPress={() => clickedPosition(8)} />
        </View>
        {winner !== '' && <GameReset />}

    </View>
}

export default GameBoard;

const style = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingTop: 10,
    },
    containerRow: {
        flexDirection: 'row'
    },

})