import React, {Component} from 'react';
import {ScrollView, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import FormWrapper from '../../../utils/FormWrapper';
import ButtonGroupCustumized from '../../../utils/ButtonComponentStyle';
import SmsAndroid from 'react-native-get-sms-android';
import SendSMS from 'react-native-sms';
import {
  setFreeControl,
  setSystemFeedback,
  setCallOrRingtone,
  setWorkingMode,
  setPassword,
} from '../../../../Actions';
class SystemSettings extends Component {
  constructor() {
    super();
    this.state = {
      freeControlIndex: 0,
      feedBackMessageIndex: 0,
      ringToneIndex: 0,
      workingModeIndex: 0,
    };
    this.updateFreeControlIndex = this.updateFreeControlIndex.bind(this);
    this.updateFeedBackMessageIndex = this.updateFeedBackMessageIndex.bind(
      this,
    );
    this.updateRingToneIndex = this.updateRingToneIndex.bind(this);
    this.updateWorkingModeIndex = this.updateWorkingModeIndex.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
  updateFreeControlIndex(freeControlIndex) {
    const cmds = [this.freeCmd.turn_off, this.freeCmd.turn_on];
    Alert.alert(
      this.props.screen.alert.confirm,
      this.props.screen.alert.freeControl,
      [
        {
          text: this.props.screen.alert.cancel,
          onPress: () => {
            console.log('Canceled');
          },
        },
        {
          text: this.props.screen.alert.ok,
          onPress: () => {
            Platform.OS === 'ios' &&
              this.sendMessageIOS(
                `${this.prefix}${this.password}#${cmds[freeControlIndex]}`,
                this.phoneNumber,
              );
            Platform.OS === 'android' &&
              this.sendMessageAndroid(
                `${this.prefix}${this.password}#${cmds[freeControlIndex]}`,
                this.phoneNumber,
              );
            this.props.setFreeControl({
              phoneNumber: this.phoneNumber,
              index: freeControlIndex,
            });
          },
        },
      ],
      {cancelable: true},
    );
  }
  updateFeedBackMessageIndex(feedBackMessageIndex) {
    const cmds = [this.feedcmd.turn_off, this.feedcmd.turn_on];
    Alert.alert(
      this.props.screen.alert.confirm,
      this.props.screen.alert.feed,
      [
        {
          text: this.props.screen.alert.cancel,
          onPress: () => {
            console.log('Canceled');
          },
        },
        {
          text: this.props.screen.alert.ok,
          onPress: () => {
            Platform.OS === 'ios' &&
              this.sendMessageIOS(
                `${this.prefix}${this.password}#${cmds[feedBackMessageIndex]}`,
                this.phoneNumber,
              );
            Platform.OS === 'android' &&
              this.sendMessageAndroid(
                `${this.prefix}${this.password}#${cmds[feedBackMessageIndex]}`,
                this.phoneNumber,
              );
            this.props.setSystemFeedback({
              phoneNumber: this.phoneNumber,
              index: feedBackMessageIndex,
            });
          },
        },
      ],
      {cancelable: true},
    );
  }
  updateRingToneIndex(ringToneIndex) {
    const cmds = [this.callOrRcmd.dial, this.callOrRcmd.dtmf];
    Alert.alert(
      this.props.screen.alert.confirm,
      this.props.screen.alert.call_ring,
      [
        {
          text: this.props.screen.alert.cancel,
          onPress: () => {
            console.log('Canceled');
          },
        },
        {
          text: this.props.screen.alert.ok,
          onPress: () => {
            Platform.OS === 'ios' &&
              this.sendMessageIOS(
                `${this.prefix}${this.password}#${cmds[ringToneIndex]}`,
                this.phoneNumber,
              );
            Platform.OS === 'android' &&
              this.sendMessageAndroid(
                `${this.prefix}${this.password}#${cmds[ringToneIndex]}`,
                this.phoneNumber,
              );
            this.props.setCallOrRingtone({
              phoneNumber: this.phoneNumber,
              index: ringToneIndex,
            });
          },
        },
      ],
      {cancelable: true},
    );
  }
  updateWorkingModeIndex(workingModeIndex) {
    const cmds = [this.workModecmd.toggle, this.workModecmd.switch];
    Alert.alert(
      this.props.screen.alert.confirm,
      this.props.screen.alert.workingMode,
      [
        {
          text: this.props.screen.alert.cancel,
          onPress: () => {
            console.log('Canceled');
          },
        },
        {
          text: this.props.screen.alert.ok,
          onPress: () => {
            Platform.OS === 'ios' &&
              this.sendMessageIOS(
                `${this.prefix}${this.password}#${cmds[workingModeIndex]}`,
                this.phoneNumber,
              );
            Platform.OS === 'android' &&
              this.sendMessageAndroid(
                `${this.prefix}${this.password}#${cmds[workingModeIndex]}`,
                this.phoneNumber,
              );
            this.props.setWorkingMode({
              phoneNumber: this.phoneNumber,
              index: workingModeIndex,
            });
          },
        },
      ],
      {cancelable: true},
    );
  }

  findDevices() {
    this.device = this.props.devices.filter(
      (device) => device.phoneNumber == this.phoneNumber,
    );

    this.device = this.device[0];
    this.system = this.device.channels[this.device.currentChannel - 1];
    this.currentChannel = this.device.currentChannel;
    this.password = this.device.password;
    this.prefix = this.device.prefix;
    this.freeCmd = this.device.settings_system.free_control;
    this.indexFreeControl = this.freeCmd.index;
    this.feedcmd = this.device.settings_system.feedBMessage;
    this.indexFeedback = this.feedcmd.index;
    this.callOrRcmd = this.device.settings_system.call_ring_tone;
    this.indexCallOrRington = this.callOrRcmd.index;
    this.workModecmd = this.device.settings_system.working_mode;
    this.indexWorkingMode = this.workModecmd.index;
    this.pwdCap = this.device.settings_system.update_pwd_cap;
  }
  handlePasswordChange() {
    if (
      typeof this.newPassword !== 'undefined' &&
      typeof this.currentPassword !== 'undefined'
    ) {
      if ((this.newPassword.length = 6) && (this.currentPassword.length = 6)) {
        console.log(this.currentPassword + '  ==  ' + this.password);
        if (this.currentPassword == this.password) {
          Alert.alert(
            this.props.screen.alert.confirm,
            this.props.screen.alert.password,
            [
              {
                text: this.props.screen.alert.cancel,
                onPress: () => {
                  console.log('Canceled');
                },
              },
              {
                text: this.props.screen.alert.ok,
                onPress: () => {
                  Platform.OS === 'ios' &&
                    this.sendMessageIOS(
                      `${this.prefix}${this.password}#${this.pwdCap}${this.newPassword}#${this.pwdCap}${this.newPassword}`,
                      this.phoneNumber,
                    );
                  Platform.OS === 'android' &&
                    this.sendMessageAndroid(
                      `${this.prefix}${this.password}#${this.pwdCap}${this.newPassword}#${this.pwdCap}${this.newPassword}`,
                      this.phoneNumber,
                    );
                  this.props.setPassword({
                    password: this.newPassword,
                    phoneNumber: this.phoneNumber,
                  });
                },
              },
            ],
            {cancelable: true},
          );
        } else {
          console.log('contraseña incorrecta');
        }
      }
    }
  }
  render() {
    this.phoneNumber = this.props.route.params.cellphone;
    this.findDevices();
    const activeOptions = [
      this.props.screen.control_off,
      this.props.screen.control_on,
    ];
    const ringsAvailable = ['Dial', 'DTMF'];

    const workingModeTitles = [
      this.props.screen.working_mode_button1,
      this.props.screen.working_mode_button2,
    ];

    const ringToneIndex = this.indexCallOrRington;
    const workingModeIndex = this.indexWorkingMode;
    const feedBackMessageIndex = this.indexFeedback;
    const freeControlIndex = this.indexFreeControl;
    return (
      <SafeAreaView
        style={[
          style.container,
          {backgroundColor: this.props.theme.body_background},
        ]}>
        <ScrollView>
          <FormWrapper title={this.props.screen.control_label}>
            <ButtonGroupCustumized
              action={this.updateFreeControlIndex}
              index={freeControlIndex}
              buttons={activeOptions}
            />
          </FormWrapper>
          <FormWrapper title={this.props.screen.feedBMessage}>
            <ButtonGroupCustumized
              action={this.updateFeedBackMessageIndex}
              index={feedBackMessageIndex}
              buttons={activeOptions}
            />
          </FormWrapper>
          <FormWrapper
            containerStyle={{height: 160}}
            title={this.props.screen.update_pwd_label}>
            <Input
              keyboardType={'numeric'}
              containerStyle={{paddingHorizontal: 0}}
              placeholder={this.props.screen.current_pwd_label}
              inputStyle={{
                color: this.props.theme.settings_system_subtitle,
              }}
              maxLength={6}
              onChangeText={(text) => {
                this.currentPassword = text;
              }}
              onEndEditing={this.handlePasswordChange}
            />
            <Input
              keyboardType={'numeric'}
              containerStyle={{paddingHorizontal: 0}}
              placeholder={this.props.screen.new_pwd_label}
              inputStyle={{
                color: this.props.theme.settings_system_subtitle,
              }}
              maxLength={6}
              onChangeText={(text) => {
                this.newPassword = text;
              }}
              onEndEditing={this.handlePasswordChange}
            />
          </FormWrapper>
          <FormWrapper title={this.props.screen.call_ring_tone_label}>
            <ButtonGroupCustumized
              action={this.updateRingToneIndex}
              index={ringToneIndex}
              buttons={ringsAvailable}
            />
          </FormWrapper>
          <FormWrapper title={this.props.screen.working_mode_label}>
            <ButtonGroupCustumized
              action={this.updateWorkingModeIndex}
              index={workingModeIndex}
              buttons={workingModeTitles}
            />
          </FormWrapper>
          <FormWrapper title={this.props.screen.set_all_relay_status_label}>
            <Input
              keyboardType={'numeric'}
              containerStyle={{paddingHorizontal: 0}}
              placeholder={this.props.screen.set_all_relay_status_placeholder}
              inputStyle={{
                color: this.props.theme.settings_system_subtitle,
              }}
            />
          </FormWrapper>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
  },
});
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    screen: state.screens.settings_system_settings[state.currentLanguage],
    devices: state.devices,
  };
};
const mapDistpatchToProps = {
  setFreeControl,
  setSystemFeedback,
  setCallOrRingtone,
  setWorkingMode,
  setPassword,
};
export default connect(mapStateToProps, mapDistpatchToProps)(SystemSettings);
