import { StyleSheet } from 'react-native';

export const mainApp = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase',
  },
  playerLabel: {
    margin: 10,
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  h2: {
    margin: 10,
    fontSize: 16,
    padding: 1,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase',
  },
  purpleButton: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
  },
  whiteButtonText: {
    margin: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },
  resetButton: {
    padding: 10,
    backgroundColor: '#000',
  },
});