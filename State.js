const state = {
  currentTheme: 'light',
  currentLanguage: 'esp',
  themes: {
    dark: {
      titleNormal: '#d4d4d4',
      letter: '#fcfcfc',
      primary: 'rgba(75,75,75,.83)',
      background: '#2c2e2e',
      borderColor: '#cccccc',
      letterAlternative: '#bc4343',
      editIcon: '#348fb8',
    },
    light: {
      titleNormal: '#41444B',
      letter: '#fcfcfc',
      primary: '#FDDB3A',
      background: '#F6F4E6',
      borderColor: '#41444B',
      letterAlternative: '#52575D',
      editIcon: '#0800FB  ',
    },
  },
  device_default: {
    name: null,
    phoneNumber: null,
    currentChannel: null,
    password: '123456',
    controlls: [
      {
        name: {
          eng: 'Dial to work',
          esp: 'Llamar al dispositivo',
        },
        value: 'Call',
        message: false,
      },
      {
        name: {
          eng: 'SMS to on',
          esp: 'Mensaje para encender',
        },
        value: 'ON',
        message: true,
      },
      {
        name: {
          eng: 'SMS to off',
          esp: 'Mensaje para apagar',
        },
        value: 'OFF',
        message: true,
      },
      {
        name: {
          eng: 'SMS to Jog',
          esp: 'Mensaje por tiempo',
        },
        value: 'JOG',
        message: true,
      },
    ],
    channels: [
      {
        name: 'OUT1',
        value: 1,
      },
      {
        name: 'OUT2',
        value: 2,
      },
      {
        name: 'OUT3',
        value: 3,
      },
      {
        name: 'OUT4',
        value: 4,
      },
    ],
  },
  loading: {
    eng: 'Loading...',
    esp: 'Cargando...',
  },
  devices: [
    {
      name: 'Casa morita',
      phoneNumber: 6648956326,
      currentChannel: null,
      password: '123456',
      controlls: [
        {
          name: {
            eng: 'Dial to work',
            esp: 'Llamar al dispositivo',
          },
          value: 'Call',
          message: false,
        },
        {
          name: {
            eng: 'SMS to on',
            esp: 'Mensaje para encender',
          },
          value: 'ON',
          message: true,
        },
        {
          name: {
            eng: 'SMS to off',
            esp: 'Mensaje para apagar',
          },
          value: 'OFF',
          message: true,
        },
        {
          name: {
            eng: 'SMS to Jog',
            esp: 'Mensaje por tiempo',
          },
          value: 'JOG',
          message: true,
        },
      ],
      channels: [
        {
          name: 'OUT1',
          value: 1,
        },
        {
          name: 'OUT2',
          value: 2,
        },
        {
          name: 'OUT3',
          value: 3,
        },
        {
          name: 'OUT4',
          value: 4,
        },
      ],
    },
    {
      name: 'Casa Blanca',
      phoneNumber: 6635894102,
      currentChannel: null,
      password: '123456',
      controlls: [
        {
          name: {
            eng: 'Dial to work',
            esp: 'Llamar al dispositivo',
          },
          value: 'Call',
          message: false,
        },
        {
          name: {
            eng: 'SMS to on',
            esp: 'Mensaje para encender',
          },
          value: 'ON',
          message: true,
        },
        {
          name: {
            eng: 'SMS to off',
            esp: 'Mensaje para apagar',
          },
          value: 'OFF',
          message: true,
        },
        {
          name: {
            eng: 'SMS to Jog',
            esp: 'Mensaje por tiempo',
          },
          value: 'JOG',
          message: true,
        },
      ],
      channels: [
        {
          name: 'OUT1',
          value: 1,
        },
        {
          name: 'OUT2',
          value: 2,
        },
        {
          name: 'OUT3',
          value: 3,
        },
        {
          name: 'OUT4',
          value: 4,
        },
      ],
    },
  ],
};

export default state;
