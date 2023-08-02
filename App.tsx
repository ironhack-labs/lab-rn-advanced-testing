import React from 'react';
import {SafeAreaView} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import {BoardScreen} from './src/screens';
import {GameProvider} from './src/context';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView style={{flex: 1}}>
        <GameProvider>
          <BoardScreen />
        </GameProvider>
      </SafeAreaView>
    </ApplicationProvider>
  </>
);

export default App;
