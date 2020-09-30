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
import Icon from './src/utils/Icon';

const store = createStore(reducer, State);
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Icon name="delete" />
    </Provider>
  );
};

export default App;
