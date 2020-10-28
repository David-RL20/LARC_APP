/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {SafeAreaView} from 'react-native';
import State from './State';
import reducer from './Reducer';
import AppStack from './src/StackApp';

const store = createStore(reducer, State);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
