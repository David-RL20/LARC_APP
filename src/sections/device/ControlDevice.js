// Este componente contiene la seleccion del canal output y el control de abrir, cerrar, por tiempo y por llamada.
//los controles anteriormente explicados solo controlaran el dispositivo seleccionado con su canal seleccionado.
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {connect} from 'react-redux';
import {setCurrentChannel} from '../../../Actions';
import Icon from '../../utils/Icon';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import SmsAndroid from 'react-native-get-sms-android';
import SendSMS from 'react-native-sms';
class Controll extends Component {
  constructor() {
    super();
    this.updateIndex = this.updateIndex.bind(this);
    this.makeCall = this.makeCall.bind(this);
    this.unlockDevice = this.unlockDevice.bind(this);
    this.lockDevice = this.lockDevice.bind(this);
    this.jogDevice = this.jogDevice.bind(this);
    this.state = {
      selectedIndex: null,
    };
  }

  updateIndex(selectedIndex) {
    this.setState({
      selectedIndex,
    });
    this.currentChannel = selectedIndex + 1;
    this.props.setCurrentChannel({
      currentChannel: selectedIndex + 1,
      phoneNumber: this.phoneNumber,
    });
  }

  makeCall() {
    Alert.alert(
      'Confirmacion',
      'Desea llamar a ' + this.phoneNumber + ' ?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancell');
          },
        },
        {
          text: 'Ok',
          onPress: () => {
            RNImmediatePhoneCall.immediatePhoneCall(this.phoneNumber);
          },
        },
      ],
      {cancelable: true},
    );
  }
  sendMessageIOS(msg, phone) {
    SendSMS.send(
      {
        body: msg,
        recipients: [phone],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true,
      },
      (completed, cancelled, error) => {
        console.log(
          'SMS Callback: completed: ' +
            completed +
            ' cancelled: ' +
            cancelled +
            'error: ' +
            error,
        );
      },
    );
  }
  sendMessageAndroid(msg, phone) {
    SmsAndroid.autoSend(
      phone,
      msg,
      (fail) => {
        console.log('Failed with this error: ' + fail);
      },
      (success) => {
        console.log('SMS sent successfully');
      },
    );
  }
  unlockDevice() {
    Alert.alert(
      'Confirmacion',
      'Desea abrir el dispositivo ?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Canceled');
          },
        },
        {
          text: 'Ok',
          onPress: () => {
            Platform.OS === 'ios' &&
              this.sendMessageIOS(
                `${this.prefix}${this.password}#OUT${this.currentChannel}=OFF`,
                this.phoneNumber,
              );
            Platform.OS === 'android' &&
              this.sendMessageAndroid(
                `${this.prefix}${this.password}#OUT${this.currentChannel}=OFF`,
                this.phoneNumber,
              );
          },
        },
      ],
      {cancelable: true},
    );
  }
  lockDevice() {
    Alert.alert(
      'Confirmacion',
      'Desea cerrar el dispositivo ?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancell');
          },
        },
        {
          text: 'Ok',
          onPress: () => {
            Platform.OS === 'ios' &&
              this.sendMessageIOS(
                `${this.prefix}${this.password}#OUT${this.currentChannel}=ON`,
                this.phoneNumber,
              );
            Platform.OS === 'android' &&
              this.sendMessageAndroid(
                `${this.prefix}${this.password}#OUT${this.currentChannel}=ON`,
                this.phoneNumber,
              );
          },
        },
      ],
      {cancelable: true},
    );
  }
  jogDevice() {
    Alert.alert(
      'Confirmacion',
      'Desea abrir por tiempo el dispositivo ?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancell');
          },
        },
        {
          text: 'Ok',
          onPress: () => {
            Platform.OS === 'ios' &&
              this.sendMessageIOS(
                `${this.prefix}${this.password}#RLY${this.currentChannel}=null`,
                this.phoneNumber,
              );
            Platform.OS === 'android' &&
              this.sendMessageAndroid(
                `${this.prefix}${this.password}#RLY${this.currentChannel}=null`,
                this.phoneNumber,
              );
          },
        },
      ],
      {cancelable: true},
    );
  }

  render() {
    this.name = this.props.route.params.name;
    this.phoneNumber = this.props.route.params.phoneNumber;
    this.password = this.props.route.params.password;
    this.prefix = this.props.route.params.prefix;
    console.log(
      `Canal en el estado = ` + this.props.route.params.currentChannel,
    );

    const buttons = [1, 2, 3, 4];
    const {selectedIndex} = this.state;
    return (
      <View
        style={[
          style.container,
          {backgroundColor: this.props.theme.body_background},
        ]}>
        {/* Channel control */}
        <View style={style.container_control}>
          <Text
            style={[
              style.labelChannel,
              {color: this.props.theme.control_title},
            ]}>
            {this.props.screen.title} :
          </Text>

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{
              height: 40,
              width: 150,
              margin: 0,
              backgroundColor: this.props.theme.body_background,
              borderColor: this.props.theme.control_channel_borders,
            }}
            innerBorderStyle={{
              color: this.props.theme.control_channel_borders,
            }}
            textStyle={{color: this.props.theme.control_channel_numbers}}
            selectedButtonStyle={{
              backgroundColor: this.props.theme.control_channel_selected,
            }}
            selectedTextStyle={{
              color: this.props.theme.control_channel_selected_title,
            }}
          />
        </View>
        {/* Device control */}
        <View style={style.deviceControl}>
          <View>
            <Text
              style={[
                style.nameDevice,
                {color: this.props.theme.control_title},
              ]}>
              {this.name}
            </Text>
            <Text
              style={[
                style.numberDevice,
                {color: this.props.theme.control_subtitle},
              ]}>
              {this.phoneNumber}
            </Text>
          </View>

          <View style={style.container_icons}>
            <TouchableOpacity
              style={style.container_action_button}
              onPress={this.unlockDevice}>
              <Icon name="unlock" />
            </TouchableOpacity>

            <TouchableOpacity
              style={style.container_action_button}
              onPress={this.lockDevice}>
              <Icon name="lock" />
            </TouchableOpacity>

            <TouchableOpacity
              style={style.container_action_button}
              onPress={this.jogDevice}>
              <Icon name="time" />
            </TouchableOpacity>

            <TouchableOpacity
              style={style.container_action_button}
              onPress={this.makeCall}>
              <Icon name="phone" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_control: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  container_control_buttons: {
    width: '80%',
  },
  control_button_label: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  deviceControl: {
    height: 500,
    paddingHorizontal: 20,
  },
  nameDevice: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
  },
  numberDevice: {
    fontSize: 23,
    fontFamily: 'Roboto-Regular',
  },
  container_icons: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 25,
  },
  container_action_button: {
    padding: 20,
    width: '50%',
  },
});

const mapStateToProps = (state) => {
  return {
    state: state,
    theme: state.themes[state.currentTheme],
    screen: state.screens.device_control[state.currentLanguage],
  };
};
const mapDispatchToProps = {
  setCurrentChannel,
};
export default connect(mapStateToProps, mapDispatchToProps)(Controll);
