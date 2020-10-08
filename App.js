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
import State from './State';
import reducer from './Reducer';
import ListDevices from './src/sections/device/ListDevices';

const store = createStore(reducer, State);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ListDevices />
    </Provider>
  );
};

export default App;
