import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {VICTORY_CONDITIONS} from '../constants/utils';
import {Board} from '../components/Board';
import {mainApp} from '../themes/App.styles';

export const Home = () => {
  const [playerTurn, setPlayerTurn] = useState<boolean>(true);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');

  const [turns, setTurns] = useState<Record<number, string>>({});

  const togglePlayerTurn = () => setPlayerTurn(prevTurn => !prevTurn);
  const toggleGameEnded = () => setGameEnded(prevEnded => !prevEnded);
  const toggleModalVisible = () => setModalVisible(!modalVisible);

  console.log(toggleGameEnded);
  const newGame = () => {
    setTurns({});
    setGameEnded(false);
    setModalVisible(false);
    setPlayerTurn(true);
  };

  const finishGame = () => {
    setGameEnded(false);
    toggleModalVisible();
  };

  const checkWinner = () => {
    for (const combination of VICTORY_CONDITIONS) {
      const [a, b, c] = combination;
      if (
        turns[a] === turns[b] &&
        turns[b] === turns[c] &&
        a in turns &&
        b in turns &&
        c in turns
      ) {
        setResult(
          playerTurn ? 'Congratulations Player 1!' : 'Nice going Player 2!',
        );
        finishGame();
        return;
      }
    }

    if (Object.keys(turns).length === 9) {
      setResult('Tie Game!');
      finishGame();
    }
  };

  const checkTurn = (index: number) => {
    const tempTurns = turns;
    tempTurns[index] = playerTurn ? 'X' : 'O';

    //Sets the turn state with the new value added
    setTurns({...tempTurns});

    //Here we call a function to check if the game is won abd change players
    checkWinner();
    togglePlayerTurn();
  };

  return (
    <>
      <Text style={mainApp.paragraph}>Tic Tac Toe</Text>
      {!gameEnded && <Board turns={turns} onTurn={checkTurn} />}
      <Modal animationType="slide" visible={modalVisible}>
        <View style={mainApp.centeredView}>
          <View style={mainApp.modalView}>
            <Text style={mainApp.h2}>{result}</Text>
            <TouchableOpacity style={mainApp.purpleButton} onPress={newGame}>
              <Text style={mainApp.whiteButtonText}>Start a new game</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={mainApp.legend}>
        <Text style={mainApp.playerLabel}>X - Player 1</Text>
        <Text style={mainApp.playerLabel}>O - Player 2</Text>
      </View>
    </>
  );
};
