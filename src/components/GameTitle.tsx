import React from "react"
import { StyleSheet, Text, View } from "react-native";

type GameTitleProps = {
    title: string;
}

const GameTitle = ({ title }: GameTitleProps) => {
    return (
        <Text testID="title" style={styles.title}>{title}</Text>
    )
}

export default GameTitle;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 20,
    }
})