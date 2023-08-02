import React, {FC} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { s } from './Button.styles';

type ButtonProps = {
  textToShow?: string;
  onPress: () => void;
}

export const Button:FC<ButtonProps> = ({onPress, textToShow = "Press to start"}) => {
  return (
    <TouchableOpacity 
    style={s.buttonGame}
    onPress={onPress}>
      <Text style={s.textButtonGame}>{textToShow === 'X' ? 'You are the winner' : 'Bot is the winner'}!</Text>
      <Text style={s.textPlayAgain}>Touch here to play again!</Text>
    </TouchableOpacity>
  )
}
