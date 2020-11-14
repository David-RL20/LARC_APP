import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Button} from 'react-native-elements';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Wrapper from '../../../utils/FormWrapperHorizontal';
import {connect} from 'react-redux';
import SmsAndroid from 'react-native-get-sms-android';
import SendSMS from 'react-native-sms';
import Toast from 'react-native-simple-toast';

class AplicacionPlatzi extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      chosenDate: '',
      chosenTime: '',
      isVisibleTime: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handlePicker = (date) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(date).format('MMMM, Do YYYY'),
    });
  };

  showPicker = () => {
    this.setState({
      isVisible: true,
    });
  };
  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };

  handlePickerTime = (time) => {
    this.setState({
      isVisibleTime: false,
      chosenTime: moment(time).format('HH:mm'),
    });
  };

  showPickerTime = () => {
    this.setState({
      isVisibleTime: true,
    });
  };
  hidePickerTime = () => {
    this.setState({
      isVisibleTime: false,
    });
  };
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
        Toast.show(this.props.screen.toasts.sms_fail);
      },
      (success) => {
        Toast.show(this.props.screen.toasts.sms);
      },
    );
  }
  handleSearch() {
    console.log('searching...');
    Alert.alert(
      this.props.screen.alerts.confirmation,
      this.props.screen.alerts.search,
      [
        {
          text: this.props.screen.alerts.cancel,
          onPress: () => {
            console.log('Canceled');
          },
        },
        {
          text: this.props.screen.alerts.ok,
          onPress: () => {
            Platform.OS === 'ios' &&
              this.sendMessageIOS(
                `${this.prefix}${this.password}#${this.command}`,
                this.phoneNumber,
              );
            Platform.OS === 'android' &&
              this.sendMessageAndroid(
                `${this.prefix}${this.password}#${this.command}`,
                this.phoneNumber,
              );
          },
        },
      ],
      {cancelable: true},
    );
  }
  findDevice() {
    this.device = this.props.devices.filter(
      (device) => device.phoneNumber == this.phoneNumber,
    );
    this.device = this.device[0];
    this.password = this.device.password;
    this.prefix = this.device.prefix;
    this.command = this.device.history.command;
  }

  render() {
    this.phoneNumber = this.props.route.params.cellphone;
    this.findDevice();
    return (
      <>
        <SafeAreaView
          style={[
            styles.container,
            {backgroundColor: this.props.theme.body_background},
          ]}>
          <Wrapper
            theme={this.props.theme}
            title={this.props.screen.date + ' :'}>
            <Button
              title={this.state.chosenDate || this.props.screen.not_selected}
              style={[
                styles.select_date_button,
                {backgroundColor: this.props.theme.body_background},
              ]}
              titleStyle={{color: this.props.theme.settings_history_title}}
              onPress={this.showPicker}
              buttonStyle={{
                borderColor: this.props.theme.settings_history_button_border,
              }}
              type="outline"
            />
          </Wrapper>
          <Wrapper
            theme={this.props.theme}
            title={this.props.screen.hour + ' :'}>
            <Button
              title={this.state.chosenTime || this.props.screen.not_selected}
              style={[
                styles.select_date_button,
                {backgroundColor: this.props.theme.body_background},
              ]}
              titleStyle={{color: this.props.theme.settings_history_title}}
              onPress={this.showPickerTime}
              buttonStyle={{
                borderColor: this.props.theme.settings_history_button_border,
              }}
              type="outline"
            />
          </Wrapper>
          <Button
            title={this.props.screen.search}
            buttonStyle={[
              styles.searchbutton,
              {
                backgroundColor: this.props.theme
                  .settings_history_button_background,
                borderColor: this.props.theme.settings_history_button_border,
              },
            ]}
            onPress={this.handleSearch.bind(this)}
            titleStyle={{color: this.props.theme.settings_history_button_title}}
          />

          <DateTimePickerModal
            isVisible={this.state.isVisible}
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}
            mode={'date'}
            is24Hour={false}
          />

          <DateTimePickerModal
            isVisible={this.state.isVisibleTime}
            onConfirm={this.handlePickerTime}
            onCancel={this.hidePickerTime}
            mode={'time'}
            is24Hour={false}
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  select_date_button: {
    height: 65,
    width: '80%',
    borderRadius: 30,
  },
  searchbutton: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
});
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    screen: state.screens.settings_history[state.currentLanguage],
    devices: state.devices,
  };
};
export default connect(mapStateToProps)(AplicacionPlatzi);
