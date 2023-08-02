import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet, View } from 'react-native';
interface InicioScreenProps {
    onStartGame: () => void;
  }

export const InicioScreen: React.FC<InicioScreenProps> = ({ onStartGame }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Game</Text>
      <Button
        title={'Touch To Start'}
        onPress={onStartGame}
        color={'#28A745'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default InicioScreen;
