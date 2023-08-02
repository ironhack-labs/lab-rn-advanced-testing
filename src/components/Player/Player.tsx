import React, { useState } from 'react'
import { Button, Text} from 'react-native';

export const Player = () => {

  const [turn, setTurn] = useState<'human' | 'Ai'>('human');

  const handleTurn = () => {
    setTurn(prevTurn => (prevTurn === 'human' ? 'Ai': 'human'))
  };

  return (
    <>
      <Text>Current turn: {turn}</Text>
      <Button title="Change Turn" onPress={handleTurn}/>
    </>
  )
}
