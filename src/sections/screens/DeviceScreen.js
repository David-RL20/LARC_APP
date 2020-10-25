import React from 'react';
import AddDevice from '../device/AddDevice';
import ListDevice from '../device/ListDevices';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const DeviceScreen = ({navigation}) => {
  return (
    <>
      <ListDevice navigation={navigation} />
      <AddDevice />
    </>
  );
};

export default DeviceScreen;
