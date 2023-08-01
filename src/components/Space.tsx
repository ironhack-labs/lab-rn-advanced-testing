// components/Space.tsx
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {spaceStyle} from '../improve/Styles';

interface SpaceProps {
  spaceID: number;
  spaceValue: string;
  setTurn: (spaceID: number) => void;
}

const Space: React.FC<SpaceProps> = ({spaceID, spaceValue, setTurn}) => {
  return (
    <View style={spaceStyle.container}>
      <TouchableOpacity
        style={spaceStyle.space}
        onPress={() => setTurn(spaceID)}
        disabled={!!spaceValue}>
        <Text style={spaceStyle.spaceValue}>{spaceValue}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Space;
