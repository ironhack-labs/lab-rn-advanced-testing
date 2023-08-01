import {StyleSheet} from 'react-native';

export const spaceStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    width: 90,
    height: 90,
    marginVertical: 2,
    marginHorizontal: 2,
    backgroundColor: '#fafafa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceValue: {
    fontSize: 60,
    color: '#000',
    fontWeight: 'bold',
  },
});
