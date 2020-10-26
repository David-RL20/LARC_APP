const state = {
  currentTheme: 'light',
  currentLanguage: 'eng',
  themes: {
    dark: {
      header_background: 'rgba(75,75,75,.83)',
      header_title: '#FCFCFC',
      body_background: '#2C2E2E',
      device_list_title: '#D4D4D4',
      device_list_subtitle: '#BC4343',
      device_list_border: '#CCCCCC',
      device_add_background: '#4B4B4B',
      device_add_title: '#FCFCFC',
      overlay_background: '#4B4B4B',
      overlay_title: '#FCFCFC',
      overlay_button_regular: '#2C2E2E',
      overlay_button_primary: '#BC4343',
      overlay_button_title: '#D4D4D4',
      control_title: '#D4D4D4',
      control_channel_numbers: '#CCCCCC',
      control_subtitle: '#BC4343',
      control_channel_borders: '#CCCCCC',
      control_channel_selected: '#BC4343',
      control_channel_selected_title: '#FCFCFC',
      settings_title: '#D4D4D4',
      settings_border: '#CCCCCC',
      settings_calendar_title: '#D4D4D4',
      settings_calendar_subtitle: '#BC4343',
      settings_history_title: '#D4D4D4',
      settings_history_button_background: '#4B4B4B',
      settings_history_button_title: '#D4D4D4',
      settings_history_button_border: '#CCCCCC',
      settings_out_title: '#D4D4D4',
      settings_out_subtitle: '#D4D4D4',
      settings_button_group_background_selected: '#BC4343',
      settings_button_group_border: '#CCCCCC',
      settings_button_group_title: '#D4D4D4',
    },
    light: {
      header_background: '#FDDB3A',
      header_title: '#41444B',
      body_background: '#F6F4E6',
      device_list_title: '#41444B',
      device_list_subtitle: '#41444B',
      device_list_border: '#41444B',
      device_add_background: '#52575D',
      device_add_title: '#FFFFFF',
      overlay_background: '#52575D',
      overlay_title: '#F6F4E6',
      overlay_button_regular: '#F6F4E6',
      overlay_button_primary: '#FDDB3A',
      overlay_button_title: '#41444B',
      control_title: '#41444B',
      control_channel_numbers: '#41444B',
      control_subtitle: '#52575D',
      control_channel_borders: '#41444B',
      control_channel_selected: '#FDDB3A',
      control_channel_selected_title: '#41444B',
      settings_title: '#41444B',
      settings_border: 'rgba(15,7,7,.29)',
      settings_calendar_title: '#41444B',
      settings_calendar_subtitle: '#41444B',
      settings_history_title: '#41444B',
      settings_history_button_background: '#FDDB3A',
      settings_history_button_title: '#52575D',
      settings_history_button_border: '#707070',
      settings_out_title: '#41444B',
      settings_out_subtitle: '#41444B',
      settings_button_group_background_selected: '#FDDB3A',
      settings_button_group_border: '#707070',
      settings_button_group_title: '#52575D',
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
    device_control: {
      eng: {
        title: 'Channel',
      },
      esp: {
        title: 'Canal',
      },
    },
    device_settings: {
      eng: [
        {
          title: 'Calendar',
          logo: 'schedule',
          route: 'settings_calendar',
        },
        {
          title: 'History',
          logo: 'historial',
          route: 'settings_history',
        },
        {
          title: 'Channel out settings',
          logo: 'settings_out',
          route: 'settings_out',
        },
        {
          title: 'Channel in settings',
          logo: 'settings_in',
          route: 'settings_in',
        },
        {
          title: 'System settings',
          logo: 'settings',
          route: 'settings_system',
        },
      ],
      esp: [
        {
          title: 'Agenda',
          logo: 'schedule',
          route: 'settings_calendar',
        },
        {
          title: 'Historial',
          logo: 'historial',
          route: 'settings_history',
        },
        {
          title: 'Ajustes del canal out',
          logo: 'settings_out',
          route: 'settings_out',
        },
        {
          title: 'Ajustes del canal in',
          logo: 'settings_in',
          route: 'settings_in',
        },
        {
          title: 'Ajustes del sistema',
          logo: 'settings',
          route: 'settings_system',
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
    settings_channel_in: {
      eng: {
        channel_name: 'Channel name',
        placeholder: 'Channel',
        call: 'Emergency call',
        call_off: 'Turn off',
        call_on: 'Turn on',
        emergNumber: 'Emergency number',
        emergHolder: '664*******',
        feedBMessage: 'Feedback message',
        feedHolder: 'Write a feedback message',
      },
      esp: {
        channel_name: 'Nombre del canal',
        placeholder: 'Canal',
        call: 'Llamada de emergencia',
        call_off: 'Apagado',
        call_on: 'Prendido',
        emergNumber: 'Numero de emergencia',
        emergHolder: '664*******',
        feedBMessage: 'Mensaje de retroalimentacion',
        feedHolder: 'Escribe un mensaje de retroalimentacion',
      },
    },
    settings_channel_out: {
      eng: {
        channel_name: 'Channel name',
        channel_holder: 'Channel',
        type_activation: 'Type activation',
        type_temporal: 'Temporal',
        type_const: 'Constants',
        base_time: 'Base Time',
        btime_minutes: 'Minutes',
        btime_seconds: 'Seconds',
        btime_miliseconds: 'Miliseconds',
        activation_time: 'Activation time',
        activation_message: 'Activation message',
        activation_holder: 'Write an activation message',
        feedback_message: 'Feedback message',
        feedback_holder: 'Write a feedback message',
      },
      esp: {
        channel_name: 'Nombre del canal',
        channel_holder: 'Canal',
        type_activation: 'Tipo de activacion',
        type_temporal: 'Temporal',
        type_const: 'Constante',
        base_time: 'Tiempo base',
        btime_minutes: 'Minutos',
        btime_seconds: 'Segundos',
        btime_miliseconds: 'Milisegundos',
        activation_time: 'Tiempo de activacion',
        activation_message: 'Mensaje de activacion',
        activation_holder: 'Escribe un mensaje de activacion',
        feedback_message: 'Mensaje de retroalimentacion',
        feedback_holder: 'Escribe un mensaje de retroalimentacion',
      },
    },
    settings_system_settings: {
      eng: {
        control_label: 'Free control',
        control_on: 'ON',
        control_off: 'OFF',
        feedBMessage: 'Feedback message',
        update_pwd_label: 'Update password',
        current_pwd_label: 'Current password',
        new_pwd_label: 'New password',
        call_ring_tone_label: 'Call or ring tone',
      },
      esp: {
        control_label: 'Control libre',
        control_on: 'Prendido',
        control_off: 'Apagado',
        feedBMessage: 'Mensaje de retroalimentación',
        update_pwd_label: 'Actualizar contraseña',
        current_pwd_label: 'Contraseña actual',
        new_pwd_label: 'Contraseña nueva',
        call_ring_tone_label: 'Llamada o tono',
      },
    },
    settings_history: {
      eng: {},
      esp: {},
    },
  },
};

export default state;
