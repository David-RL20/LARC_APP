function Reducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_CHANNEL':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              currentChannel: action.payLoad.currentChannel,
            };
          } else {
            return device;
          }
        }),
      };
    default:
      return state;
  }
}
export default Reducer;
