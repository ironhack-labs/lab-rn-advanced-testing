import React from 'react';
import {SafeAreaView} from 'react-native';
import {ApplicationProvider, IconRegistry, Text} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView style={{flex: 1}}>
        <Text>App</Text>
      </SafeAreaView>
    </ApplicationProvider>
  </>
);

export default App;
