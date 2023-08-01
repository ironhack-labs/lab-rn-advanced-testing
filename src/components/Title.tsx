import {View, Text} from 'react-native';
import React from 'react';
import {titleStyles} from '../themes/Title.styles';

export const Title = () => {
  return (
    <View style={titleStyles.container}>
      <Text style={titleStyles.title}>Tic Tac Toe</Text>
    </View>
  );
};
