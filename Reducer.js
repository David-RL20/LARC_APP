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

    case 'SET_CURRENT_STATUS':
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
                        currentStatus: action.payLoad.currentStatus,
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
                        on_off: channel.configs.channel_out.on_off.map(
                          (onOff) => {
                            if (onOff.value == action.payLoad.currentStatus) {
                              return {
                                ...onOff,
                                activation_message: {
                                  ...onOff.activation_message,
                                  value: action.payLoad.activation_message,
                                },
                              };
                            } else {
                              return onOff;
                            }
                          },
                        ),
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
                        on_off: channel.configs.channel_out.on_off.map(
                          (onOff) => {
                            if (onOff.value == action.payLoad.currentStatus) {
                              return {
                                ...onOff,
                                feedBMessage: {
                                  ...onOff.feedBMessage,
                                  value: action.payLoad.feedBMessage,
                                },
                              };
                            } else {
                              return onOff;
                            }
                          },
                        ),
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

    /********************Channel In********************** */
    case 'SET_CURRENT_CHANNEL_IN':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              currentChannelIn: action.payLoad.currentChannelIn,
            };
          } else {
            return device;
          }
        }),
      };
    case 'SET_CHANNEL_IN_NAME':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              channel_in: device.channel_in.map((channel) => {
                if (channel.value == action.payLoad.currentChannelIn) {
                  return {
                    ...channel,
                    name: action.payLoad.name,
                  };
                } else {
                  return {
                    ...channel,
                  };
                }
              }),
            };
          } else {
            return device;
          }
        }),
      };
    case 'SET_CHANNEL_IN_EMERGENCY_CALL':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              channel_in: device.channel_in.map((channel) => {
                if (channel.value == action.payLoad.currentChannelIn) {
                  return {
                    ...channel,
                    configs: {
                      ...channel.configs,
                      emergencyCall: {
                        ...channel.configs.emergencyCall,
                        index: action.payLoad.index,
                      },
                    },
                  };
                } else {
                  return {
                    ...channel,
                  };
                }
              }),
            };
          } else {
            return device;
          }
        }),
      };

    case 'SET_CHANNEL_IN_EMERGENCY_NUMBER':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              channel_in: device.channel_in.map((channel) => {
                if (channel.value == action.payLoad.currentChannelIn) {
                  return {
                    ...channel,
                    configs: {
                      ...channel.configs,
                      emergencyNumber: {
                        ...channel.configs.emergencyNumber,
                        phone: action.payLoad.phone,
                      },
                    },
                  };
                } else {
                  return {
                    ...channel,
                  };
                }
              }),
            };
          } else {
            return device;
          }
        }),
      };

    case 'SET_CHANNEL_IN_FEEDBACK_MESSAGE':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              channel_in: device.channel_in.map((channel) => {
                if (channel.value == action.payLoad.currentChannelIn) {
                  return {
                    ...channel,
                    configs: {
                      ...channel.configs,
                      feedBMessage: action.payLoad.feedBMessage,
                    },
                  };
                } else {
                  return {
                    ...channel,
                  };
                }
              }),
            };
          } else {
            return device;
          }
        }),
      };
    /******************System Settings******************* */
    case 'SET_FREE_CONTROL':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              settings_system: {
                ...device.settings_system,
                free_control: {
                  ...device.settings_system.free_control,
                  index: action.payLoad.index,
                },
              },
            };
          } else {
            return device;
          }
        }),
      };
    case 'SET_SYSTEM_FEEDBACK':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              settings_system: {
                ...device.settings_system,
                feedBMessage: {
                  ...device.settings_system.feedBMessage,
                  index: action.payLoad.index,
                },
              },
            };
          } else {
            return device;
          }
        }),
      };

    case 'SET_CALL_OR_RINGTONE':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              settings_system: {
                ...device.settings_system,
                call_ring_tone: {
                  ...device.settings_system.call_ring_tone,
                  index: action.payLoad.index,
                },
              },
            };
          } else {
            return device;
          }
        }),
      };

    case 'SET_WORKING_MODE':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              settings_system: {
                ...device.settings_system,
                working_mode: {
                  ...device.settings_system.working_mode,
                  index: action.payLoad.index,
                },
              },
            };
          } else {
            return device;
          }
        }),
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        devices: state.devices.map((device) => {
          if (device.phoneNumber == action.payLoad.phoneNumber) {
            return {
              ...device,
              password: action.payLoad.password,
            };
          } else {
            return device;
          }
        }),
      };
    /******************DEVICE******************* */
    case 'ADD_DEVICE':
      return {
        ...state,
        devices: [
          ...state.devices,
          {
            ...state.device_default,
            name: action.payLoad.name,
            phoneNumber: action.payLoad.phoneNumber,
          },
        ],
      };
    case 'DELETE_DEVICE':
      return {
        ...state,
        devices: state.devices.filter(
          (device) => device.phoneNumber !== action.payLoad.phoneNumber,
        ),
      };
    default:
      return state;
  }
}
export default Reducer;
