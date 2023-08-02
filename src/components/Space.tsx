import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {spaceStyle} from '../themes/Space.styles';

interface SpaceProps {
  spaceID: number;
  spaceValue: string;
  setTurn: (spaceID: number) => void;
}

const Space = ({spaceID, spaceValue, setTurn}: SpaceProps) => {
  return (
    <View style={spaceStyle.container}>
      <TouchableOpacity
        style={spaceStyle.space}
        onPress={() => setTurn(spaceID)}
        disabled={!!spaceValue}
        testID={`space-${spaceID}`} 
        >
        <Text style={spaceStyle.spaceValue}>{spaceValue}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Space;
