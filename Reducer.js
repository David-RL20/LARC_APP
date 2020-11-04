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

    case 'SET_CHANNEL_OUT_NAME':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              channels: device.channels.map((channel) => {
                if (channel.value == action.payLoad.value) {
                  return {
                    ...channel,
                    configs: {
                      ...channel.configs,
                      channel_out: {
                        ...channel.configs.channel_out,
                        name: action.payLoad.name,
                      },
                    },
                  };
                }
                return channel;
              }),
            };
          } else {
            return device;
          }
        }),
      };

    case 'SET_ACTIVATION_TYPE':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              channels: device.channels.map((channel) => {
                if (channel.value == action.payLoad.value) {
                  return {
                    ...channel,
                    configs: {
                      ...channel.configs,
                      channel_out: {
                        ...channel.configs.channel_out,
                        activation_type: {
                          ...channel.configs.channel_out.activation_type,
                          index: action.payLoad.index,
                        },
                      },
                    },
                  };
                }
                return channel;
              }),
            };
          } else {
            return device;
          }
        }),
      };

    case 'SET_BASE_TIME':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              channels: device.channels.map((channel) => {
                if (channel.value == action.payLoad.value) {
                  return {
                    ...channel,
                    configs: {
                      ...channel.configs,
                      channel_out: {
                        ...channel.configs.channel_out,
                        base_time: {
                          ...channel.configs.channel_out.base_time,
                          index: action.payLoad.index,
                        },
                      },
                    },
                  };
                }
                return channel;
              }),
            };
          } else {
            return device;
          }
        }),
      };

    case 'SET_ACTIVATION_TIME':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              channels: device.channels.map((channel) => {
                if (channel.value == action.payLoad.value) {
                  return {
                    ...channel,
                    configs: {
                      ...channel.configs,
                      channel_out: {
                        ...channel.configs.channel_out,
                        activation_time: action.payLoad.activation_time,
                      },
                    },
                  };
                }
                return channel;
              }),
            };
          } else {
            return device;
          }
        }),
      };

    case 'SET_ACTIVATION_MESSAGE':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              channels: device.channels.map((channel) => {
                if (channel.value == action.payLoad.value) {
                  return {
                    ...channel,
                    configs: {
                      ...channel.configs,
                      channel_out: {
                        ...channel.configs.channel_out,
                        activation_message: action.payLoad.activation_message,
                      },
                    },
                  };
                }
                return channel;
              }),
            };
          } else {
            return device;
          }
        }),
      };

    case 'SET_FEED_BACK_MESSAGE_OUT':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              channels: device.channels.map((channel) => {
                if (channel.value == action.payLoad.value) {
                  return {
                    ...channel,
                    configs: {
                      ...channel.configs,
                      channel_out: {
                        ...channel.configs.channel_out,
                        feedBMessage: action.payLoad.feedBMessage,
                      },
                    },
                  };
                }
                return channel;
              }),
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
