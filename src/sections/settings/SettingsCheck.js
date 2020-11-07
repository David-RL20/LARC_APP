import React, { Component, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Text,
    Alert
} from 'react-native';
import{connect} from 'react-redux';
import SmsAndroid from 'react-native-get-sms-android';
import SendSMS from 'react-native-sms';
class SettingsCheck extends Component {

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

      findDevices() {
        this.device = this.props.devices.filter(
          (device) => device.phoneNumber == this.phoneNumber,
        );
    
        this.device = this.device[0];
        
        this.password = this.device.password;
    
        this.prefix = this.device.prefix;

        this.status=this.device.check_system_status;
    
        
        
      }

    render() {
        this.phoneNumber = this.props.route.params.cellphone;
        this.findDevices();

        Alert.alert(
            'Status',
            'Desea checar el status del dispositivo?', [

                {
                    text:'cancel',
                    onPress:()=>{
                        console.log('cancel')
                        this.props.navigation.goBack();
                    }
                },
                {
                text: 'ok',
                onPress: () => {
                    Platform.OS === 'ios' &&
                    this.sendMessageIOS(
                      `${this.prefix}${this.password}${this.status}`,
                      this.phoneNumber,
                    );
                  Platform.OS === 'android' &&
                    this.sendMessageAndroid(
                      `${this.prefix}${this.password}${this.status}`,
                      this.phoneNumber,
                    );
                    this.props.navigation.goBack();
                }


            }
        ]

        )
        return (null)

    }
}


const mapStateToProps = (state) => {
    return {
      
      devices: state.devices,
    };
  };
export default connect(mapStateToProps)(SettingsCheck);