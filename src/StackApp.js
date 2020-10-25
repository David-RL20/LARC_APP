// In App.js in a new project

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './sections/screens/loading';
import DevicesScreen from './sections/screens/DeviceScreen';
import DeviceControl from './sections/device/ControlDevice';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{title: 'LARC'}}
        initialRouteName={'DevicesScreen'}>
        <Stack.Screen name="Loading" component={HomeScreen} />
        <Stack.Screen name="DevicesScreen" component={DevicesScreen} />
        <Stack.Screen name="DeviceControl" component={DeviceControl} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
