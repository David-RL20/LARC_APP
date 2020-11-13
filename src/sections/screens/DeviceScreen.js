import React from 'react';
import AddDevice from '../device/AddDevice';
import ListDevice from '../device/ListDevices';
import ControlSettings from '../device/ControlSettings';
const DeviceScreen = ({navigation}) => {
  return (
    <>
      <ControlSettings />
      <ListDevice navigation={navigation} />
      <AddDevice />
    </>
  );
};

export default DeviceScreen;
