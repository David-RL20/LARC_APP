import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text} from 'react-native';
import {Input} from 'react-native-elements';
import FormWrapper from '../../../utils/FormWrapper';
import {connect} from 'react-redux';
import ButtonGroupCustumized from '../../../utils/ButtonComponentStyle';
import {
  setCurrentChannelIn,
  setChannelInName,
  setChannelInEmergencyCall,
  setChannelInEmergencyNumber,
  setChannelInFeedbackMessage,
} from '../../../../Actions';

class ChannelIn extends Component {
  constructor() {
    super();
    this.updateEmergencyCallIndex = this.updateEmergencyCallIndex.bind(this);
    this.updateChannelIndex = this.updateChannelIndex.bind(this);
    this.handleEmergencyNumberChange = this.handleEmergencyNumberChange.bind(
      this,
    );
  }

  updateEmergencyCallIndex(selectedIndex) {
    this.props.setChannelInEmergencyCall({
      phoneNumber: this.phoneNumber,
      currentChannelIn: this.currentChannelIn,
      index: selectedIndex,
    });
  }
  updateChannelIndex(selectedChannel) {
    this.props.setCurrentChannelIn({
      phoneNumber: this.phoneNumber,
      currentChannelIn: selectedChannel + 1,
    });
  }
  handleNameChannelInChange() {
    this.props.setChannelInName({
      phoneNumber: this.phoneNumber,
      currentChannelIn: this.currentChannelIn,
      name: this.name_input,
    });
  }
  handleEmergencyNumberChange() {
    this.props.setChannelInEmergencyNumber({
      phoneNumber: this.phoneNumber,
      currentChannelIn: this.currentChannelIn,
      phone: this.cellphone_input,
    });
  }

  handleFeedbackMessageChange() {
    this.props.setChannelInFeedbackMessage({
      phoneNumber: this.phoneNumber,
      currentChannelIn: this.currentChannelIn,
      feedBMessage: this.feedBMessage_input,
    });
  }
  findDevices() {
    this.device = this.props.devices.filter(
      (device) => device.phoneNumber == this.phoneNumber,
    );
    this.device = this.device[0];
    this.currentChannelIn = this.device.currentChannelIn;
    this.password = this.device.password;
    this.prefix = this.device.prefix;
    this.Channel_In = this.device.channel_in[this.currentChannelIn - 1];
    this.channelInName = this.Channel_In.name;
    //Emergency call
    this.emergencyCallIndex = this.Channel_In.configs.emergencyCall.index;
    this.emergencyNumber = this.Channel_In.configs.emergencyNumber.phone;
    //FeedBack
    this.feedBMessage = this.Channel_In.configs.feedBMessage;
  }

  render() {
    this.phoneNumber = this.props.route.params.cellphone;
    this.findDevices();
    //Emergency call buttons
    const buttons = [this.props.screen.call_on, this.props.screen.call_off];
    const emergencyCallIndex = this.emergencyCallIndex;

    //selected channel
    const buttonsChannel = [1, 2];
    const selectedChannel = this.currentChannelIn - 1;

    //Return
    return (
      <SafeAreaView
        style={[
          style.container,
          {
            backgroundColor: this.props.theme.body_background,
          },
        ]}>
        <ScrollView>
          <View>
            <View style={style.container_control}>
              <Text
                style={[
                  style.labelChannel,
                  {color: this.props.theme.control_title},
                ]}>
                {this.props.screen_channel.title} :
              </Text>

              <ButtonGroupCustumized
                action={this.updateChannelIndex}
                index={selectedChannel}
                buttons={buttonsChannel}
                containerStyle={{
                  width: 100,
                  margin: 0,
                }}
                height="40"
              />
            </View>

            <FormWrapper title={this.props.screen.channel_name}>
              <Input
                containerStyle={{paddingHorizontal: 0}}
                placeholder={
                  this.channelInName || this.props.screen.placeholder
                }
                onChangeText={(text) => {
                  this.name_input = text;
                }}
                onEndEditing={this.handleNameChannelInChange.bind(this)}
              />
            </FormWrapper>
            <FormWrapper title={this.props.screen.call}>
              <ButtonGroupCustumized
                action={this.updateEmergencyCallIndex}
                index={emergencyCallIndex}
                buttons={buttons}
              />
            </FormWrapper>

            <FormWrapper title={this.props.screen.emergNumber}>
              <Input
                keyboardType={'numeric'}
                containerStyle={{paddingHorizontal: 0}}
                placeholder={
                  this.emergencyNumber || this.props.screen.emergHolder
                }
                inputStyle={{color: this.props.theme.settings_in_subtitle}}
                onEndEditing={this.handleEmergencyNumberChange}
                onChangeText={(text) => {
                  this.cellphone_input = text;
                }}
              />
            </FormWrapper>
            <FormWrapper title={this.props.screen.feedBMessage}>
              <Input
                containerStyle={{paddingHorizontal: 0}}
                placeholder={this.feedBMessage || this.props.screen.feedHolder}
                inputStyle={{color: this.props.theme.settings_in_subtitle}}
                onChangeText={(text) => {
                  this.feedBMessage_input = text;
                }}
                onEndEditing={this.handleFeedbackMessageChange.bind(this)}
              />
            </FormWrapper>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    screen: state.screens.settings_channel_in[state.currentLanguage],
    screen_channel: state.screens.device_control[state.currentLanguage],
    devices: state.devices,
  };
};

const mapDistpatchToProps = {
  setCurrentChannelIn,
  setChannelInName,
  setChannelInEmergencyCall,
  setChannelInEmergencyNumber,
  setChannelInFeedbackMessage,
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
  },
  labelChannel: {
    fontWeight: 'bold',
  },
  container_control: {
    paddingHorizontal: 20,
    // paddingVertical: 5,
  },
});

export default connect(mapStateToProps, mapDistpatchToProps)(ChannelIn);
