import React, { useEffect, useState } from 'react'
import { Board, Header } from '@components';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { BoardState, isEmpty} from '@utils';


export const App = () => {
  const [turn, setTurn] = useState<'human' | 'Bot'>(Math.random() < 0.5 ? 'human' : 'Bot');
  const [state, setState] = useState<BoardState>([
    null,null,null,
    null,null,null,
    null,null,null
  ]);

  const handleClickMove = (cell: number):void => {
    if(turn !== 'human') return
    // TODO functionality of choose the character
    // insertMove(cell, 'X')
    setTurn('Bot');
  }

  const insertMove = (cell: number, character: 'X' | 'O'): void => {
    const stateCpy: BoardState = [...state];
    // TODO condition gameover
    if(stateCpy[cell]) return;
    stateCpy[cell] = character;
    setState(stateCpy)
  }

  useEffect(() => {
    if(turn === 'Bot') {
      if(isEmpty(state)) {
        const movesCenterCorners = [0,2,6,8,4];
        const firstMove = movesCenterCorners[Math.floor(Math.random()* movesCenterCorners.length)]
        insertMove(firstMove, 'X');
        //TODO implement algorithm result of winner
        setTurn('human');
      } else {
        // TODO implement result of algorithm for the next move
        setTurn('human');
      }
    }
  }, [state, turn]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header/>
        <Board 
        board={state}
        size={300}
        // Todo implement disabled when game over
        disabled={turn !== 'human'}
        onCellAction={(cell) => {
          handleClickMove(cell)
        }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
