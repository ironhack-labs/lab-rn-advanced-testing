import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles';

type Props = {
  handleResetGame: () => void;
  winner: string;
};

const Winner = ({handleResetGame, winner}: Props) => {
  return (
    <View style={styles.winnerBlock}>
      <Text style={styles.text} testID="winner">{`Winner: ${winner}`}</Text>
      <TouchableOpacity onPress={handleResetGame} style={styles.winnerBlock}>
        <Text style={styles.text}>New Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Winner;
