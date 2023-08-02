import {View} from 'react-native';
import {Square} from './Square';
import styles from '../../styles';

type PropsT = {
  squares: string[][];
  handleOnPress: (x: number, y: number) => void;
};

export const Board = ({squares, handleOnPress}: PropsT) => {
  return (
    <View style={styles.board} testID="board">
      {squares.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((square: string, index: number) => (
            <Square
              y={index}
              x={rowIndex}
              value={square}
              key={`square-${rowIndex}${index}`}
              handleOnPress={handleOnPress}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;
