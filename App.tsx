import React, { useEffect, useState } from 'react'
import { Board, Button, Header } from '@components';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { BoardState, isEmpty, checkWin } from '@utils';
import { View } from 'react-native';
import {InicioScreen} from './src/Screens/inicioScreen';


export const App = () => {
  const [turn, setTurn] = useState<'human' | 'Bot'>(Math.random() < 0.5 ? 'human' : 'Bot');
  const [winner, setWinner] = useState(false)
  const[gameOver, setGameOver]=useState({winner:"",gameOver:false})
  const [showGame, setShowGame] = useState(false);


  const initialBoard: BoardState = [
    null, null, null,
    null, null, null,
    null, null, null
  ];

  const [state, setState] = useState<BoardState>(initialBoard);

  const handleClickMove = (cell: number): void => {
    insertMove(cell, 'X')
    if (turn !== 'human') return
   const isHumanWinner = checkWin(state, 'X');
    if (isHumanWinner) {
      setWinner(true);
      return;
    }
    setTurn('Bot');
  };

  const handleResetGame = () => {
    setState(initialBoard);
    setGameOver({
      winner: '',
      gameOver: false
    })
    setWinner(false)
  }

  const insertMove = (cell: number, character: 'X' | 'O'): void => {
    const stateCpy: BoardState = [...state];
    if (stateCpy[cell]) return;
    stateCpy[cell] = character;
    setState(stateCpy)
    const winnerState = checkWin(stateCpy, character)
    if (winnerState) {
      setWinner(true)
      setGameOver({winner:character,gameOver:true});
      return;
    }
    const isEmpty = stateCpy.every((cell)=> cell!=null);
    if(isEmpty){
      setGameOver({winner:"both",gameOver:true});
      return;
    }
  }

  useEffect(() => {
    if (turn === 'Bot') {
      if (isEmpty(state)) {
        const movesCenterCorners = [0, 2, 6, 8, 4];
        const firstMove = movesCenterCorners[Math.floor(Math.random() * movesCenterCorners.length)];
        insertMove(firstMove, 'O');
        const isBotWinner = checkWin(state, 'O');
        if (isBotWinner) {
          setWinner(true);
          return;
        }
        setTurn('human');
      } else {
        let availableCells = [];
        for (let i = 0; i < state.length; i++) {
          if (!state[i]) {
            availableCells.push(i);
          }
        }
        if (availableCells.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableCells.length);
          const nextMoveCell = availableCells[randomIndex];
          insertMove(nextMoveCell, 'O');
          const isBotWinner = checkWin(state, 'O');
          if (isBotWinner) {
            setWinner(true);
            return;
          }
          setTurn('human');
        }
      }
    }
  }, [state, turn, gameOver]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
      {showGame ? (
          <>
        <Header />
        <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 20,
          }}
        >
          <Board
            board={state}
            size={300}
            disabled={turn !== 'human' || winner}
            onCellAction={(cell) => {
              handleClickMove(cell)
            }}
          />
        </View>
        {
          gameOver.gameOver && <Button textToShow={gameOver.winner} onPress={handleResetGame}/>
        }
        
          </>
        ) : (
          <>
          <Header />
          <InicioScreen onStartGame={() => setShowGame(true)} 
          />
          </>

        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
