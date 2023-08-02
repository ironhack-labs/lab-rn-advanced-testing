import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles';

type PropsT = {
  x: number;
  y: number;
  value: string;
  handleOnPress: (x: number, y: number) => void;
};

export const Square = ({x, y, value, handleOnPress}: PropsT) => {
  const onPress = () => handleOnPress(x, y);

  return (
    <TouchableOpacity style={styles.square} onPress={onPress} testID="square">
      <Text style={styles.squareText} testID="square-value">
        {value}
      </Text>
    </TouchableOpacity>
  );
};
