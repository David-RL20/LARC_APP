import React, {Component} from 'react';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Input, ButtonGroup} from 'react-native-elements';
import FormWrapper from '../../../utils/FormWrapper';
import {connect} from 'react-redux';
import ButtonGroupCustumized from '../../../utils/ButtonComponentStyle';

//FALTAN LOS LABELS EN ENG Y ESP
class ChannelOut extends Component {
  constructor() {
    super();
    this.state = {
      activationTypeIndex: 0,
      timeBaseIndex: 0,
    };
    this.updateActivationType = this.updateActivationType.bind(this);
    this.updateTimeBase = this.updateTimeBase.bind(this);
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
  render() {
    /*Time Base*/
    const timeBaseButtons = [
      this.props.screen.btime_minutes,
      this.props.screen.btime_seconds,
      this.props.screen.btime_miliseconds,
    ];
    const {timeBaseIndex} = this.state;
    /*Activation type*/
    const activationTypeButtons = [
      this.props.screen.type_temporal,
      this.props.screen.type_const,
    ];
    const {activationTypeIndex} = this.state;
    return (
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={59}
        style={[
          style.container,
          {
            backgroundColor: this.props.theme.body_background,
          },
        ]}>
        <FormWrapper title={this.props.screen.channel_name}>
          <Input
            disabled
            containerStyle={{paddingHorizontal: 0}}
            placeholder={this.props.screen.channel_holder}
            style={{fontSize: 13}}
            inputStyle={{color: this.props.theme.settings_out_subtitle}}
          />
        </FormWrapper>
        <FormWrapper title={this.props.screen.type_activation}>
          <ButtonGroupCustumized
            action={this.updateActivationType}
            index={activationTypeIndex}
            buttons={activationTypeButtons}
          />
        </FormWrapper>
        <FormWrapper title={this.props.screen.base_time}>
          <ButtonGroupCustumized
            action={this.updateTimeBase}
            index={timeBaseIndex}
            buttons={timeBaseButtons}
          />
        </FormWrapper>
        <FormWrapper title={this.props.screen.activation_time}>
          <Input
            keyboardType={'numeric'}
            containerStyle={{paddingHorizontal: 0}}
            placeholder="Canal"
            style={{fontSize: 13}}
            inputStyle={{color: this.props.theme.settings_out_subtitle}}
          />
        </FormWrapper>
        <FormWrapper title={this.props.screen.activation_message}>
          <Input
            containerStyle={{paddingHorizontal: 0}}
            placeholder={this.props.screen.activation_holder}
            style={{fontSize: 13}}
            inputStyle={{color: this.props.theme.settings_out_subtitle}}
          />
        </FormWrapper>
        <FormWrapper title={this.props.screen.feedback_message}>
          <Input
            containerStyle={{paddingHorizontal: 0}}
            placeholder={this.props.screen.feedback_holder}
            style={{fontSize: 13}}
            inputStyle={{color: this.props.theme.settings_out_subtitle}}
          />
        </FormWrapper>
      </KeyboardAvoidingView>
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
    screen: state.screens.settings_channel_out[state.currentLanguage],
  };
};

export default connect(mapStateToProps)(ChannelOut);
