import React from 'react'
import { Text, View } from 'react-native'
import { s } from './Header.styles'

export const Header = () => {
  return (
    <View style={s.header}>
      <Text style={s.titleHeader}>Tic Tac Toe</Text>
    </View>
  )
}
