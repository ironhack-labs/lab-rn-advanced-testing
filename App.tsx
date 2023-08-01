// App.tsx

import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import WelcomeScreen from './src/WelcomeScreen';
import GameScreen from './src/GameScreen';
export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <View style={styles.container}>
      {!gameStarted ? (
        <WelcomeScreen startGame={() => setGameStarted(true)} />
      ) : (
        <GameScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
