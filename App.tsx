// App.tsx

import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/WelcomeScreen';
import GameScreen from './src/GameScreen';

export type MainNavigationProps = {
  Welcome: undefined;
  Game: undefined;
};

const Stack = createNativeStackNavigator<MainNavigationProps>();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
            <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
            <Stack.Screen name="Game" options={{headerShown: false}} component={GameScreen} />
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
