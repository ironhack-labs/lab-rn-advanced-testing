import React, { useState } from 'react'
import { Button, Text} from 'react-native';

export const Player = () => {

  const [turn, setTurn] = useState<'human' | 'Bot'>(Math.random() < 0.5 ? 'human' : 'Bot');

  const handleTurn = () => {
    setTurn(prevTurn => (prevTurn === 'human' ? 'Bot': 'human'))
  };

  return (
    <>
      <Text>Current turn: {turn}</Text>
      <Button title="Change Turn" onPress={handleTurn}/>
    </>
  )
}
