import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { mainApp } from './src/improve/Styles';
import Board from './src/improve/Board';

const PLAYER_X = 'X';
const PLAYER_O = 'O';
const EMPTY = '-';
const DRAW = 'draw';
const VICTORY_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function App() {
  const [playerTurn, setPlayerTurn] = useState<boolean>(true);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');

  const [turns, setTurns] = useState<Record<number, string>>({});

  const togglePlayerTurn = () => setPlayerTurn((prevTurn) => !prevTurn);
  const toggleGameEnded = () => setGameEnded((prevEnded) => !prevEnded);
  const toggleModalVisible = () => setModalVisible((prevVisible) => !prevVisible);

  const newGame = () => {
    setTurns({});
    setGameEnded(false);
    setModalVisible(false);
    setPlayerTurn(true);
  };

  const finishGame = () => {
    setGameEnded(true);
    toggleModalVisible();
  };

  const checkWinner = () => {
    for (const combination of VICTORY_CONDITIONS) {
      const [a, b, c] = combination;
      if (turns[a] === turns[b] && turns[b] === turns[c] && turns[a] && turns[b] && turns[c]) {
        setResult(playerTurn ? 'Congratulations Player 1!' : 'Nice going Player 2!');
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
    if (turns[index]) {
      return;
    }

    const updatedTurns = { ...turns, [index]: playerTurn ? PLAYER_X : PLAYER_O };
    setTurns(updatedTurns);

    checkWinner();
    togglePlayerTurn();
  };

  return (
    <View style={mainApp.container}>
      <Text style={mainApp.paragraph}>Let's play Tic-Tac-Toe!</Text>
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
        <Text style={mainApp.subheader}>X - Player 1</Text>
        <Text style={mainApp.subheader}>O - Player 2</Text>
      </View>
    </View>
  );
}
