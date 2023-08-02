import React from 'react'
import { Text, View } from 'react-native'
import { s } from './Header.styles'

export const Header = () => {
  return (
    <View style={s.header}>
      <Text>Soy el header</Text>
    </View>
  )
}
