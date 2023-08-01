import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const ResetButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Reset</Text>
    </TouchableOpacity>
  );
};

export default ResetButton;
