import React, {FC} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type ButtonProps = {
  textToShow?: string;
  onPress: () => void;
}

export const Button:FC<ButtonProps> = ({onPress, textToShow = "Press to start"}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{textToShow}</Text>
    </TouchableOpacity>
  )
}
