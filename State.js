const state = {
  currentTheme: 'dark',
  currentLanguage: 'esp',
  themes: {
    dark: {
      header_background: 'rgb(75,75,75)',
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
      settings_in_title: '#D4D4D4',
      settings_in_subtitle: '#D4D4D4',
      settings_system_subtitle: '#D4D4D4',
      switch_background: '#f5dd4b',
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
      settings_in_title: '#41444B',
      settings_in_subtitle: '#41444B',
      settings_system_subtitle: '#41444B',
      switch_background: '#f4f3f4',
    },
  },
  device_default: {
    currentChannel: 1,
    currentChannelIn: 1,
    prefix: '#PWD',
    password: '123456',
    check_system_status: '#STATUS?',
    channels: [
      {
        name: 'OUT1',
        value: 1,
        configs: {
          calendar: [],
          history: [],
          channel_out: {
            name: '',
            base_time: {
              index: 0,
              milliseconds: 'TIMER-DELAY-AT-MILLISECOND',
              seconds: 'TIMER-DELAY-AT-SECOND',
              minutes: 'TIMER-DELAY-AT-MINUTE',
            },
            activation_time: 0,
            currentStatus: 0,
            on_off: [
              {
                value: 0,
                activation_message: {
                  value: '',
                  command: '-ON-TEXT:',
                },
                feedBMessage: {
                  value: '',
                  command: '-ON-REPLY-TEXT:',
                },
              },
              {
                value: 1,
                activation_message: {
                  value: '',
                  command: '-OFF-TEXT:',
                },
                feedBMessage: {
                  value: '',
                  command: '-OFF-REPLY-TEXT:',
                },
              },
            ],
          },
        },
      },
      {
        name: 'OUT2',
        value: 2,
        configs: {
          calendar: [],
          history: [],
          channel_out: {
            name: '',

            base_time: {
              index: 0,
              milliseconds: 'TIMER-DELAY-AT-MILLISECOND',
              seconds: 'TIMER-DELAY-AT-SECOND',
              minutes: 'TIMER-DELAY-AT-MINUTE',
            },
            activation_time: 0,
            currentStatus: 0,
            on_off: [
              {
                value: 0,
                activation_message: {
                  value: '',
                  command: '-ON-TEXT:',
                },
                feedBMessage: {
                  value: '',
                  command: '-ON-REPLY-TEXT:',
                },
              },
              {
                value: 1,
                activation_message: {
                  value: '',
                  command: '-OFF-TEXT:',
                },
                feedBMessage: {
                  value: '',
                  command: '-OFF-REPLY-TEXT:',
                },
              },
            ],
          },
        },
      },
      {
        name: 'OUT3',
        value: 3,
        configs: {
          calendar: [],
          history: [],
          channel_out: {
            name: '',

            base_time: {
              index: 0,
              milliseconds: 'TIMER-DELAY-AT-MILLISECOND',
              seconds: 'TIMER-DELAY-AT-SECOND',
              minutes: 'TIMER-DELAY-AT-MINUTE',
            },
            activation_time: 0,
            currentStatus: 0,
            on_off: [
              {
                value: 0,
                activation_message: {
                  value: '',
                  command: '-ON-TEXT:',
                },
                feedBMessage: {
                  value: '',
                  command: '-ON-REPLY-TEXT:',
                },
              },
              {
                value: 1,
                activation_message: {
                  value: '',
                  command: '-OFF-TEXT:',
                },
                feedBMessage: {
                  value: '',
                  command: '-OFF-REPLY-TEXT:',
                },
              },
            ],
          },
        },
      },
      {
        name: 'OUT4',
        value: 4,
        configs: {
          calendar: [],
          history: [],
          channel_out: {
            name: '',

            base_time: {
              index: 0,
              milliseconds: 'TIMER-DELAY-AT-MILLISECOND',
              seconds: 'TIMER-DELAY-AT-SECOND',
              minutes: 'TIMER-DELAY-AT-MINUTE',
            },
            activation_time: 0,
            currentStatus: 0,
            on_off: [
              {
                value: 0,
                activation_message: {
                  value: '',
                  command: '-ON-TEXT:',
                },
                feedBMessage: {
                  value: '',
                  command: '-ON-REPLY-TEXT:',
                },
              },
              {
                value: 1,
                activation_message: {
                  value: '',
                  command: '-OFF-TEXT:',
                },
                feedBMessage: {
                  value: '',
                  command: '-OFF-REPLY-TEXT:',
                },
              },
            ],
          },
        },
      },
    ],
    channel_in: [
      {
        value: 1,
        name: '',
        configs: {
          emergencyCall: {
            index: 0,
            turn_on: '',
            turn_off: '',
          },
          emergencyNumber: {
            phone: '',
          },
          feedBMessage: '',
        },
      },
      {
        value: 2,
        name: '',
        configs: {
          emergencyCall: {
            index: 0,
            turn_on: '',
            turn_off: '',
          },
          emergencyNumber: {
            phone: '',
          },
          feedBMessage: '',
        },
      },
    ],
    settings_system: {
      free_control: {
        index: 0,
        turn_on: 'ACM=ON',
        turn_off: 'ACM=OFF',
      },
      feedBMessage: {
        index: 0,
        turn_on: 'REPORT=ON',
        turn_off: 'REPORT=OFF',
      },
      update_pwd_cap: 'CAP',
      call_ring_tone: {
        index: 0,
        dial: 'ON',
        dtmf: 'OFF',
      },
      working_mode: {
        index: 0,
        toggle: 'MODE0',
        switch: 'MODE1',
      },

      set_all_relay_status: '',
    },
    history: {
      command: 'EVENTOS?',
    },
  },
  loading: {
    eng: 'Loading...',
    esp: 'Cargando...',
  },
  devices: [
    {
      name: 'Brandi',
      phoneNumber: '6643454982',
      currentChannel: 1,
      currentChannelIn: 1,
      prefix: '#PWD',
      password: '123456',
      check_system_status: '#STATUS?',
      channels: [
        {
          name: 'OUT1',
          value: 1,
          configs: {
            calendar: [],
            history: [],
            channel_out: {
              name: '',
              base_time: {
                index: 0,
                milliseconds: 'TIMER-DELAY-AT-MILLISECOND',
                seconds: 'TIMER-DELAY-AT-SECOND',
                minutes: 'TIMER-DELAY-AT-MINUTE',
              },
              activation_time: 0,
              currentStatus: 0,
              on_off: [
                {
                  value: 0,
                  activation_message: {
                    value: '',
                    command: '-ON-TEXT:',
                  },
                  feedBMessage: {
                    value: '',
                    command: '-ON-REPLY-TEXT:',
                  },
                },
                {
                  value: 1,
                  activation_message: {
                    value: '',
                    command: '-OFF-TEXT:',
                  },
                  feedBMessage: {
                    value: '',
                    command: '-OFF-REPLY-TEXT:',
                  },
                },
              ],
            },
          },
        },
        {
          name: 'OUT2',
          value: 2,
          configs: {
            calendar: [],
            history: [],
            channel_out: {
              name: '',

              base_time: {
                index: 0,
                milliseconds: 'TIMER-DELAY-AT-MILLISECOND',
                seconds: 'TIMER-DELAY-AT-SECOND',
                minutes: 'TIMER-DELAY-AT-MINUTE',
              },
              activation_time: 0,
              currentStatus: 0,
              on_off: [
                {
                  value: 0,
                  activation_message: {
                    value: '',
                    command: '-ON-TEXT:',
                  },
                  feedBMessage: {
                    value: '',
                    command: '-ON-REPLY-TEXT:',
                  },
                },
                {
                  value: 1,
                  activation_message: {
                    value: '',
                    command: '-OFF-TEXT:',
                  },
                  feedBMessage: {
                    value: '',
                    command: '-OFF-REPLY-TEXT:',
                  },
                },
              ],
            },
          },
        },
        {
          name: 'OUT3',
          value: 3,
          configs: {
            calendar: [],
            history: [],
            channel_out: {
              name: '',

              base_time: {
                index: 0,
                milliseconds: 'TIMER-DELAY-AT-MILLISECOND',
                seconds: 'TIMER-DELAY-AT-SECOND',
                minutes: 'TIMER-DELAY-AT-MINUTE',
              },
              activation_time: 0,
              currentStatus: 0,
              on_off: [
                {
                  value: 0,
                  activation_message: {
                    value: '',
                    command: '-ON-TEXT:',
                  },
                  feedBMessage: {
                    value: '',
                    command: '-ON-REPLY-TEXT:',
                  },
                },
                {
                  value: 1,
                  activation_message: {
                    value: '',
                    command: '-OFF-TEXT:',
                  },
                  feedBMessage: {
                    value: '',
                    command: '-OFF-REPLY-TEXT:',
                  },
                },
              ],
            },
          },
        },
        {
          name: 'OUT4',
          value: 4,
          configs: {
            calendar: [],
            history: [],
            channel_out: {
              name: '',

              base_time: {
                index: 0,
                milliseconds: 'TIMER-DELAY-AT-MILLISECOND',
                seconds: 'TIMER-DELAY-AT-SECOND',
                minutes: 'TIMER-DELAY-AT-MINUTE',
              },
              activation_time: 0,
              currentStatus: 0,
              on_off: [
                {
                  value: 0,
                  activation_message: {
                    value: '',
                    command: '-ON-TEXT:',
                  },
                  feedBMessage: {
                    value: '',
                    command: '-ON-REPLY-TEXT:',
                  },
                },
                {
                  value: 1,
                  activation_message: {
                    value: '',
                    command: '-OFF-TEXT:',
                  },
                  feedBMessage: {
                    value: '',
                    command: '-OFF-REPLY-TEXT:',
                  },
                },
              ],
            },
          },
        },
      ],
      channel_in: [
        {
          value: 1,
          name: '',
          configs: {
            emergencyCall: {
              index: 0,
              turn_on: '',
              turn_off: '',
            },
            emergencyNumber: {
              phone: '',
            },
            feedBMessage: '',
          },
        },
        {
          value: 2,
          name: '',
          configs: {
            emergencyCall: {
              index: 0,
              turn_on: '',
              turn_off: '',
            },
            emergencyNumber: {
              phone: '',
            },
            feedBMessage: '',
          },
        },
      ],
      settings_system: {
        free_control: {
          index: 0,
          turn_on: 'ACM=ON',
          turn_off: 'ACM=OFF',
        },
        feedBMessage: {
          index: 0,
          turn_on: 'REPORT=ON',
          turn_off: 'REPORT=OFF',
        },
        replyMessage: {
          index: 0,
          turn_on: 'REPLY=ON',
          turn_off: 'REPLY=OFF',
        },
        update_pwd_cap: 'CAP',
        call_ring_tone: {
          index: 0,
          dial: 'ON',
          dtmf: 'OFF',
        },
        working_mode: {
          index: 0,
          toggle: 'MODE0',
          switch: 'MODE1',
        },

        set_all_relay_status: '',
      },
      history: {
        command: 'EVENTOS?',
        automatic: {
          index: 0,
          prefix: 'EVENTOS-AUT',
          commands: ['OFF', 'ON'],
        },
      },
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
        edit: 'Edit Device',
        add_cancel_label: 'Cancel',
        add_confirm_label: 'Confirm',
        name_label: 'Name :',
        cel_label: 'Cellphone :',
        name_placeholder_label: 'Main door',
        alerts: {
          delete: 'Delete',
          deleteAsk: 'Do you want to delete this device?',
          add_cancel_label: 'Cancel',
          add_confirm_label: 'Confirm',
        },
        toasts: {
          edit_fail: 'The phone number or name has not been modified',
          edit: 'The phone number or name has been modified',
          delete: 'The device has been deleted',
          delete_cancel: 'the device has not been deleted',
          add_fail: 'The phone number or name has not been registered',
          add: 'The device has been added',
        },
      },
      esp: {
        add: 'Agregar Dispositivo',
        edit: 'Editar dispositivo',
        add_cancel_label: 'Cancelar',
        add_confirm_label: 'Confirmar',
        name_label: 'Nombre :',
        cel_label: 'Celular :',
        name_placeholder_label: 'Puerta principal',
        alerts: {
          delete: 'Eliminar',
          deleteAsk: 'Desea eliminar este dispositivo?',
          add_cancel_label: 'Cancelar',
          add_confirm_label: 'Confirmar',
        },
        toasts: {
          edit_fail:
            'El numero de telefono y/o el nombre no han sido modificados',
          edit: 'El numero de telefono y/o el nombre han sido modificados',
          delete: 'El dispositivo ha sido eliminado',
          delete_cancel: 'El dispositivo no ha sido eliminado',
          add_fail:
            'El numero de telefono y/o el nombre no han sido registrados',
          add: 'El dispositivo ha sido añadido',
        },
      },
    },
    device_control: {
      eng: {
        title: 'Channel',
        dark_mode: 'Dark Mode :',
        language: ' Language : ',
        esp: 'Spanish',
        eng: 'English',
        alert: {
          confirmation: 'Confirmation',
          call: 'Do you want to make a call to',
          close: 'Do you want to close the device?',
          open: 'Do you want to open the device?',
          time: 'Do you want to open with time the device?',
          cancel: 'Cancel',
          ok: 'Confirm',
        },
        toasts: {
          sms: 'SMS sent successfully',
          sms_fail: 'SMS has not been sent',
          call_cancel: 'Call has been canceled',
        },
      },
      esp: {
        title: 'Canal',
        dark_mode: 'Modo Oscuro :',
        language: 'Idioma : ',
        esp: 'Español',
        eng: 'Ingles',
        alert: {
          confirmation: 'Confirmacion',
          call: 'Desea llamar a',
          close: 'Desea cerrar el dispositivo?',
          open: 'Desea abrir el dispositivo?',
          time: 'Desea abrir por tiempo el dispositivo?',
          cancel: 'Cancelar',
          ok: 'Confirmar',
        },
        toasts: {
          sms: 'SMS enviado exitosamente',
          sms_fail: 'El SMS no ha sido enviado',
          call_cancel: 'Se ha cancelado la llamada',
        },
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
        // {
        //   title: 'Channel in settings',
        //   logo: 'settings_in',
        //   route: 'settings_in',
        // },
        {
          title: 'System settings',
          logo: 'settings',
          route: 'settings_system',
        },
        {
          title: 'Check system settings',
          logo: 'settings',
          route: 'settings_check',
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
        // {
        //   title: 'Ajustes del canal in',
        //   logo: 'settings_in',
        //   route: 'settings_in',
        // },
        {
          title: 'Ajustes del sistema',
          logo: 'settings',
          route: 'settings_system',
        },
        {
          title: 'Verificar las configuraciones del sistema',
          logo: 'settings',
          route: 'settings_check',
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
        base_time: 'Base Time',
        btime_minutes: 'Minutes',
        btime_seconds: 'Seconds',
        btime_miliseconds: 'Miliseconds',
        activation_time: 'Activation time',
        activation_message: 'Activation message',
        activation_holder: 'Write an activation message',
        feedback_message: 'Feedback message',
        feedback_holder: 'Write a feedback message',
        alerts: {
          confirmation: 'Confirmation',
          change_name: 'Do you want to change the name?',
          change_baseTime: 'Do you want to change the base time?',
          change_activationTime: 'Do you want to change the activation time?',
          change_activationMessage:
            'Do you want to change the activation message?',
          change_feedbackMessage: 'Do you want to change the feedback message?',
          cancel: 'Cancel',
          ok: 'Confirm',
        },
        toasts: {
          sms: 'SMS sent successfully',
          sms_fail: 'SMS has not been sent',
        },
      },
      esp: {
        channel_name: 'Nombre del canal',
        channel_holder: 'Canal',
        base_time: 'Tiempo base',
        btime_minutes: 'Minutos',
        btime_seconds: 'Segundos',
        btime_miliseconds: 'Milisegundos',
        activation_time: 'Tiempo de activacion',
        activation_message: 'Mensaje de activacion',
        activation_holder: 'Escribe un mensaje de activacion',
        feedback_message: 'Mensaje de retroalimentacion',
        feedback_holder: 'Escribe un mensaje de retroalimentacion',
        alerts: {
          confirmation: 'Confirmacion',
          change_name: 'Desea cambiar el nombre?',
          change_baseTime: 'Desea cambiar el tiempo base?',
          change_activationTime: 'Desea cambiar el tiempo de activacion?',
          change_activationMessage: 'Desea cambiar el mensaje de activacion?',
          change_feedbackMessage: 'Desea cambiar el mensaje de respuesta?',
          cancel: 'Cancelar',
          ok: 'Confirmar',
        },
        toasts: {
          sms: 'SMS Enviado exitosamente',
          sms_fail: 'SMS no ha sido enviado',
        },
      },
    },
    settings_system_settings: {
      eng: {
        control_label: 'Free control',
        control_on: 'ON',
        control_off: 'OFF',
        feedBMessage: 'Feedback message',
        replyMessage: 'Admin notification',
        update_pwd_label: 'Update password',
        current_pwd_label: 'Current password',
        new_pwd_label: 'New password',
        call_ring_tone_label: 'Call or ring tone',
        call: 'Dial',
        working_mode_label: 'Set working mode',
        working_mode_button1: 'Toggle mode',
        working_mode_button2: 'Switch mode',
        enable_report_label: 'Enable report or not',
        set_all_relay_status_label: 'Set all relay status',
        set_all_relay_status_placeholder: 'Input 0 = OFF ,1 = ON (4 digits)',
        alert: {
          confirm: 'Confirmation',
          freeControl: 'Do You Want to change the free control status?',
          feed: 'Do you want to change the feedback status?',
          reply: 'Do you want to change admin notification status?',
          call_ring: 'Do you want to change to Dial/DTMF?',
          workingMode: 'Do you want to change the working mode?',
          ok: 'Confirm',
          cancel: 'Cancel',
          password: 'Do you want to change the password ?',
          relay_status: 'Do you want to set all relay status ?',
        },
        toasts: {
          sms: 'SMS sent successfully',
          sms_fail: 'SMS has not been sent',
        },
      },
      esp: {
        control_label: 'Control libre',
        control_on: 'Prendido',
        control_off: 'Apagado',
        feedBMessage: 'Mensaje de retroalimentación',
        replyMessage: 'Notificacion para el administrador',
        update_pwd_label: 'Actualizar contraseña',
        current_pwd_label: 'Contraseña actual',
        new_pwd_label: 'Contraseña nueva',
        call_ring_tone_label: 'Llamada o tono',
        call: 'Llamar',
        working_mode_label: 'Cambiar modo de trabajo',
        working_mode_button1: 'Modo alterno',
        working_mode_button2: 'Modo interruptor',
        enable_report_label: 'Habilitar reporte o no',
        set_all_relay_status_label: 'Cambiar el estatus de todos los relay',
        set_all_relay_status_placeholder: 'Ingrese 0 = OFF ,1 = ON (4 digitos)',
        alert: {
          confirm: 'Confirmacion',
          freeControl: 'Desea cambiar el control libre?',
          feed: 'Desea cambiar el estado de feedback?',
          reply:
            'Desea cambiar el estado de notificacion para el administrador?',
          call_ring: 'Desea cambiar el a Dial/DTMF?',
          workingMode: 'Desea cambiar el modo de trabajo?',
          ok: 'Confirmar',
          cancel: 'Cancelar',
          password: 'Quieres cambiar la contraseña ?',
          relay_status: 'Quieres establecer el status del relay?',
        },
        toasts: {
          sms: 'SMS Enviado exitosamente',
          sms_fail: 'SMS no ha sido enviado',
        },
      },
    },
    settings_history: {
      eng: {
        date: 'Date',
        hour: 'Hour',
        search: 'Search',
        not_selected: 'Not selected',
        history_automatic: 'Automatic history sending',
        on: 'ON',
        off: 'OFF',
        alerts: {
          search: 'Do you want to search?',
          cancel: 'Cancel',
          ok: 'Confirm',
          confirmation: 'Confirmation',
          history_automatic: 'Do you want to chance history automatic sending?',
        },
        toasts: {
          sms: 'SMS sent successfully',
          sms_fail: 'SMS has not been sent',
        },
      },
      esp: {
        date: 'Fecha',
        hour: 'Hora',
        search: 'Buscar',
        not_selected: 'No seleccionada',
        history_automatic: 'Envio automatico de historial',
        on: 'Prendido',
        off: 'Apagado',
        alerts: {
          search: 'Quieres buscar?',
          cancel: 'Cancelar',
          ok: 'Confirmar',
          confirmation: 'Confirmacion',
          history_automatic: 'Desea cambiar el envio automatico de historial?',
        },
        toasts: {
          sms: 'SMS Enviado exitosamente',
          sms_fail: 'SMS no ha sido enviado',
        },
      },
    },
    settings_check_system: {
      eng: {
        status: 'Status',
        check: 'Do you want to check the device status?',
        cancel: 'Cancel',
        Ok: 'Ok',
        toasts: {
          sms: 'SMS sent successfully',
          sms_fail: 'SMS has not been sent',
        },
      },
      esp: {
        status: 'Estatus',
        check: 'Desea checar el estatus del dispositivo?',
        cancel: 'Cancelar',
        Ok: 'Ok',
        toasts: {
          sms: 'SMS Enviado exitosamente',
          sms_fail: 'SMS no ha sido enviado',
        },
      },
    },
  },
};

export default state;
