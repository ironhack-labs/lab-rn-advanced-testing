import {View} from 'react-native';
import React from 'react';
import {Board} from '../components/Board';
import {homeStyles} from '../themes/Home.styles';
import {Title} from '../components/Title';

export const Home = () => {
  return (
    <View>
      <Title />
      <View style={homeStyles.container}>
        <Board />
      </View>
    </View>
  );
};
