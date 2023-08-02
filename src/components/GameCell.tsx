import React from "react";
import { Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

type GameCellProps = {
    position: number,
    onPress: () => void
}

const GameCell = ({ position, onPress }: GameCellProps) => {
    return (
        <TouchableOpacity testID="cell" onPress={() => onPress()}
            style={styles.container}
            activeOpacity={0.5}>
            <View>
                <Text testID="text" style={styles.text}>{position === 1 ? 'X' : position === 2 ? 'O' : ''}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GameCell;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width / 3.5,
        height: Dimensions.get('screen').width / 3.5,
        borderWidth: 1,
        borderColor: '#000'
    },
    text: {
        fontSize: Dimensions.get('screen').width / 4,
        textAlign: 'center',
        color: 'aqua',
    }
})