import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { spaceStyle } from '../themes/Space.styles';
import { SpaceProps } from '../interfaces/Space';

const Space = ({ spaceID, spaceValue, setTurn }: SpaceProps) => {
  return (
    <View style={spaceStyle.container}>
      <TouchableOpacity
        style={spaceStyle.space}
        onPress={() => setTurn(spaceID)}
        disabled={!!spaceValue}
      >
        <Text style={spaceStyle.spaceValue}>{spaceValue}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Space;
