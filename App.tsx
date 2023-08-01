// App.tsx

import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/WelcomeScreen';
import GameScreen from './src/GameScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleGameEnd = () => {
    setGameStarted(false);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          {!gameStarted ? (
            <Stack.Screen name="Welcome" options={{headerShown: false}}>
              {() => <WelcomeScreen onStartGame={handleStartGame} />}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="Game" options={{headerShown: false}}>
              {() => <GameScreen onGameEnd={handleGameEnd} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
