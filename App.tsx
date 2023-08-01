import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Home} from './src/screens/Home';
import XComponent from './src/components/XComponet';
import OComponent from './src/components/OComponent';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Home />
        <Text style={styles.sectionTitle}>Hello World! 2</Text>
        <XComponent color="red" />
        <OComponent color="green" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    alignContent: 'center',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
