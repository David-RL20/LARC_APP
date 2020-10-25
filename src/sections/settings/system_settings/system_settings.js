import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, ButtonGroup} from 'react-native-elements';
import {connect} from 'react-redux';
import FormWrapper from '../../../utils/FormWrapper';
import ButtonGroupCustumized from '../../../utils/ButtonComponentStyle';

class SystemSettings extends Component {
  constructor() {
    super();
    this.state = {
      freeControlIndex: 0,
      feedBackMessageIndex: 0,
      ringToneIndex: 0,
    };
    this.updateFreeControlIndex = this.updateFreeControlIndex.bind(this);
    this.updateFeedBackMessageIndex = this.updateFeedBackMessageIndex.bind(
      this,
    );
    this.updateRingToneIndex = this.updateRingToneIndex.bind(this);
  }
  updateFreeControlIndex(freeControlIndex) {
    this.setState({freeControlIndex});
  }
  updateFeedBackMessageIndex(feedBackMessageIndex) {
    this.setState({feedBackMessageIndex});
  }
  updateRingToneIndex(ringToneIndex) {
    this.setState({ringToneIndex});
  }
  render() {
    const activeOptions = [
      this.props.screen.control_off,
      this.props.screen.control_on,
    ];
    const ringsAvailable = ['Dial', 'DTMF'];
    const {freeControlIndex, feedBackMessageIndex, ringToneIndex} = this.state;
    return (
      <View
        style={[
          style.container,
          {backgroundColor: this.props.theme.background},
        ]}>
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
          />
          <Input
            keyboardType={'numeric'}
            containerStyle={{paddingHorizontal: 0}}
            placeholder={this.props.screen.new_pwd_label}
          />
        </FormWrapper>
        <FormWrapper title={this.props.screen.call_ring_tone_label}>
          <ButtonGroupCustumized
            action={this.updateRingToneIndex}
            index={ringToneIndex}
            buttons={ringsAvailable}
          />
        </FormWrapper>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    screen: state.screens.settings_system_settings[state.currentLanguage],
  };
};
export default connect(mapStateToProps)(SystemSettings);
