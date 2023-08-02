import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useGameContext } from "../context/GameProvider";

type GameStartProps = {
    title: string;
    onPress: () => void
}

const GameStart = ({ title, onPress }: GameStartProps) => {

    return (
        <TouchableOpacity testID="start" onPress={onPress} style={styles.container}>
            <View>
                <Text testID="text" style={{color: '#fff'}}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>)
}

export default GameStart;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#000',
        padding: 20,
        backgroundColor: 'gray'
    }
})