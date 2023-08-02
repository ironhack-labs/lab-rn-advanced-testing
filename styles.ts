import {Dimensions, StyleSheet} from 'react-native';

const screen = Dimensions.get('window');
const SQUARE_SIZE = Math.floor(screen.width * 0.3);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3ba2bf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  board: {
    borderWidth: 1,
    borderColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
  },
  squareText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  winnerBlock: {
    marginTop: 50,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  newGameText: {
    color: '#fff',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});

export default styles;
