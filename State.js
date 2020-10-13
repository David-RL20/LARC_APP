const state = {
  currentTheme: 'light',
  currentLanguage: 'eng',
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
  contacts: [
    {
      number: 1,
      phoneNumber: 66421345112,
    },
    {
      number: 2,
      phoneNumber: 66421345112,
    },
    {
      number: 3,
      phoneNumber: 66421345112,
    },
    {
      number: 4,
      phoneNumber: 66421345112,
    },
  ],
  screens: {
    device: {
      eng: {
        add: 'Add Device',
        add_cancel_label: 'Cancel',
        add_confirm_label: 'Confirm',
        name_label: 'Name :',
        cel_label: 'Cellphone :',
        name_placeholder_label: 'Main door',
      },
      esp: {
        add: 'Agregar Dispositivo',
        add_cancel_label: 'Cancelar',
        add_confirm_label: 'Confirmar',
        name_label: 'Nombre :',
        cel_label: 'Celular :',
        name_placeholder_label: 'Puerta principal',
      },
    },
    device_settings: {
      eng: [
        {
          title: 'Calendar',
          logo: 'schedule',
        },
      ],
      esp: [
        {
          title: 'Agenda',
          logo: 'schedule',
        },
        {
          title: 'Historial',
          logo: 'historial',
        },
        {
          title: 'Ajustes del canal out',
          logo: 'settings_out',
        },
        {
          title: 'Ajustes del canal in',
          logo: 'settings_in',
        },
        {
          title: 'Ajustes del sistema',
          logo: 'settings',
        },
      ],
    },
    settings_calendar: {
      eng: {
        searchLabel: 'Search',
        icon_search: 'search',
        RegisterNumber: 'Register Num',
        cel_label: 'Cellphone',
        add_cancel_label: 'Cancel',
        add_confirm_label: 'Confirm',
        name_placeholder_label: '#number',
        add: 'Add Contact',
      },
      esp: {
        searchLabel: 'Buscar',
        icon_search: 'search',
        RegisterNumber: 'No.Registro',
        cel_label: 'Celular',
        add_cancel_label: 'Cancelar',
        add_confirm_label: 'Confirmar',
        name_placeholder_label: '#numero',
        add: 'Agregar Contacto',
      },
    },
  },
};

export default state;
