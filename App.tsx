import React from 'react';
import {View} from 'react-native';
import {mainApp} from './src/themes/App.styles';
import {Home} from './src/screens/Home';

export default function App() {
  return (
    <View style={mainApp.container}>
      <Home />
    </View>
  );
}
