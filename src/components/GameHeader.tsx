import React from "react";
import { StyleSheet, Text, View } from "react-native";

type GameHeaderProps = {
    title: string;
}

const GameHeader = ({ title }: GameHeaderProps) => {
    return (
        <View testID="header" style={styles.container}>
            <Text testID="title" style={styles.title}>{title}</Text>
        </View>
    )
}

export default GameHeader;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua',
        height: 70,
    },
    title: {
        fontSize: 20,
        fontWeight: '700'
    }
})