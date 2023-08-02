import React, { useEffect, useState } from 'react'
import { Board, Header } from '@components';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { BoardState, isEmpty, checkWin } from '@utils';


export const App = () => {
  const [turn, setTurn] = useState<'human' | 'Bot'>(Math.random() < 0.5 ? 'human' : 'Bot');
  const [winner, setWinner] = useState(false)
  const[gameOver, setGameOver]=useState({winner:"",gameOver:false})

  const [state, setState] = useState<BoardState>([
    null, null, null,
    null, null, null,
    null, null, null
  ]);

  const handleClickMove = (cell: number): void => {
    insertMove(cell, 'X')
    if (turn !== 'human') return

   const isHumanWinner = checkWin(state, 'X');
    if (isHumanWinner) {
      setWinner(true);

      return;
    }

    // insertMove(cell, 'X');
    setTurn('Bot');
  };

  const insertMove = (cell: number, character: 'X' | 'O'): void => {
    const stateCpy: BoardState = [...state];
    // TODO condition gameover
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
    console.log(gameOver);
    
    if (turn === 'Bot') {
      if (isEmpty(state)) {
        const movesCenterCorners = [0, 2, 6, 8, 4];
        const firstMove = movesCenterCorners[Math.floor(Math.random() * movesCenterCorners.length)];

        insertMove(firstMove, 'O');

        const isBotWinner = checkWin(state, 'O');

        if (isBotWinner) {
          setWinner(true);

          console.log('¡Bot gana!');

          return;
        }

        setTurn('human');
      } else {
        // Find the next available cell for the Bot's move
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
            console.log('¡Bot gana!');
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
        <Header />
        <Board

          board={state}
          size={300}
          // Todo implement disabled when game over
          disabled={turn !== 'human' || winner}
          onCellAction={(cell) => {
            handleClickMove(cell)
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
