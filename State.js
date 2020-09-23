const state = {
    themes: {
        dark: {
            iconColor: '#dddddd',
            titleNormal: '#d4d4d4',
            letter: '#fcfcfc',
            primary: 'rgb(75,75,75,.83)',
            background: '#2c2e2e',
            borderColor: '#cccccc',
            letterAlternative: '#bc4343',
            editIcon: '#348fb8',
        },
        light: {
            iconColor: '#6e6767',
            titleNormal: '#0f0707',
            letter: '#fcfcfc',
            primary: 'rgb(145,4,4,.83)',
            background: '#ffffff',
            borderColor: '#cccccc',
            letterAlternative: 'rbg(139,4,4,.83)',
            editIcon: 'rgb(8,0,251,.71)',
        },
    },
    device: {
        logo: 'default.png',
        name: null,
        phoneNumber: null,
        currentChannel: null,
        password: '123456',
        controlls: [{
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
        channels: [{
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
};

// const password = device.password;
// const currentChannel = device.currentChannel;
// array.forEach((ele) => {
//     if (ele.message) {
//         sendMessage(`#PWD${password}#OUT${currentChannel}=${ele.value}`);
// return
//     } else {
//         ele.value
//     }
// });
export default state;