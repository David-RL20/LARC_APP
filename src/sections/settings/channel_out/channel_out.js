import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';
import {Input, ButtonGroup} from 'react-native-elements';
import FormWrapper from '../../../utils/FormWrapper';
import {connect} from 'react-redux';
import ButtonGroupCustumized from '../../../utils/ButtonComponentStyle';
// import {ScrollView} from 'react-native-gesture-handler';

//FALTAN LOS LABELS EN ENG Y ESP
class ChannelOut extends Component {
  constructor() {
    super();
    this.state = {
      activationTypeIndex: 0,
      timeBaseIndex: 0,
      selectedIndex: 0,
    };
    this.updateActivationType = this.updateActivationType.bind(this);
    this.updateTimeBase = this.updateTimeBase.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateActivationType(activationTypeIndex) {
    this.setState({
      activationTypeIndex: activationTypeIndex,
    });
  }
  updateTimeBase(timeBaseIndex) {
    this.setState({
      timeBaseIndex: timeBaseIndex,
    });
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }
  render() {
    /*Time Base*/
    const timeBaseButtons = [
      this.props.screen_settings_out.btime_minutes,
      this.props.screen_settings_out.btime_seconds,
      this.props.screen_settings_out.btime_miliseconds,
    ];
    const {timeBaseIndex} = this.state;
    /*Activation type*/
    const activationTypeButtons = [
      this.props.screen_settings_out.type_temporal,
      this.props.screen_settings_out.type_const,
    ];
    const {activationTypeIndex} = this.state;
    const buttons = [1, 2, 3, 4];
    const {selectedIndex} = this.state;
    return (
      <SafeAreaView
        style={[
          {flex: 1},
          {
            backgroundColor: this.props.theme.body_background,
          },
        ]}>
        <ScrollView>
          <View style={[style.container]}>
            <View style={style.container_control}>
              <Text
                style={[
                  style.labelChannel,
                  {color: this.props.theme.control_title},
                ]}>
                {this.props.screen_channel.title} :
              </Text>

              <ButtonGroupCustumized
                action={this.updateIndex}
                index={selectedIndex}
                buttons={buttons}
                containerStyle={{
                  width: 150,
                  margin: 0,
                }}
                height="40"
              />
            </View>

            <FormWrapper title={this.props.screen_settings_out.channel_name}>
              <Input
                containerStyle={{paddingHorizontal: 0}}
                placeholder={this.props.screen_settings_out.channel_holder}
                style={{fontSize: 13}}
                inputStyle={{color: this.props.theme.settings_out_subtitle}}
              />
            </FormWrapper>
            <FormWrapper title={this.props.screen_settings_out.type_activation}>
              <ButtonGroupCustumized
                action={this.updateActivationType}
                index={activationTypeIndex}
                buttons={activationTypeButtons}
              />
            </FormWrapper>
            <FormWrapper title={this.props.screen_settings_out.base_time}>
              <ButtonGroupCustumized
                action={this.updateTimeBase}
                index={timeBaseIndex}
                buttons={timeBaseButtons}
              />
            </FormWrapper>
            <FormWrapper title={this.props.screen_settings_out.activation_time}>
              <Input
                keyboardType={'numeric'}
                containerStyle={{paddingHorizontal: 0}}
                placeholder="Canal"
                style={{fontSize: 13}}
                inputStyle={{color: this.props.theme.settings_out_subtitle}}
              />
            </FormWrapper>
            <FormWrapper
              title={this.props.screen_settings_out.activation_message}>
              <Input
                containerStyle={{paddingHorizontal: 0}}
                placeholder={this.props.screen_settings_out.activation_holder}
                style={{fontSize: 13}}
                inputStyle={{color: this.props.theme.settings_out_subtitle}}
              />
            </FormWrapper>
            <FormWrapper
              title={this.props.screen_settings_out.feedback_message}>
              <Input
                containerStyle={{paddingHorizontal: 0}}
                placeholder={this.props.screen_settings_out.feedback_holder}
                style={{fontSize: 13}}
                inputStyle={{color: this.props.theme.settings_out_subtitle}}
              />
            </FormWrapper>
          </View>
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
  container_control: {
    paddingHorizontal: 20,
    // paddingVertical: 5,
  },
  labelChannel: {
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    screen_settings_out:
      state.screens.settings_channel_out[state.currentLanguage],
    screen_channel: state.screens.device_control[state.currentLanguage],
  };
};

export default connect(mapStateToProps)(ChannelOut);
