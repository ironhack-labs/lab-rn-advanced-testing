import React from 'react';
import { SafeAreaView } from 'react-native';
import GameScreen from './src/screens/GameScreen';
import { GameProvider } from './src/context/GameProvider';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'aqua'}}>
      <GameProvider>
        <GameScreen />
      </GameProvider>
    </SafeAreaView>
  );
};

export default App;
