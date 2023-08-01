// src/WelcomeScreen.tsx

import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {MainNavigationProps} from '../App';

type WelcomeScreenProps = NativeStackScreenProps<
  MainNavigationProps,
  'Welcome'
>;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  navigation: {navigate},
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bannerText}>Tic Tac Toe</Text>
      <Text style={styles.welcomeText}>Welcome to the game</Text>
      <TouchableOpacity
        onPress={() => navigate('Game')}
        style={styles.startButton}>
        <Text style={styles.startButtonText}>Touch here to start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 40,
  },
  startButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
