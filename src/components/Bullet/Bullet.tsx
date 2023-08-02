import React, {FC} from 'react'
import { Text, View } from 'react-native'

type BulletProps = {
  value: 'X' | 'O';
}

export const Bullet:FC<BulletProps> = ({value}) => {
  return (
    <View>
      <Text>{value}</Text>
    </View>
  )
}
