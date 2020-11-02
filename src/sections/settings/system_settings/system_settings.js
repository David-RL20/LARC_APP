import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
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
      workingModeIndex: 0,
      enableReportIndex: 0,
    };
    this.updateFreeControlIndex = this.updateFreeControlIndex.bind(this);
    this.updateFeedBackMessageIndex = this.updateFeedBackMessageIndex.bind(
      this,
    );
    this.updateRingToneIndex = this.updateRingToneIndex.bind(this);
    this.updateWorkingModeIndex = this.updateWorkingModeIndex.bind(this);
    this.updateEnableReportIndex = this.updateEnableReportIndex.bind(this);
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
  updateWorkingModeIndex(workingModeIndex) {
    this.setState({workingModeIndex});
  }
  updateEnableReportIndex(enableReportIndex) {
    this.setState({enableReportIndex});
  }
  render() {
    const activeOptions = [
      this.props.screen.control_off,
      this.props.screen.control_on,
    ];
    const ringsAvailable = ['Dial', 'DTMF'];

    const workingModeTitles = [
      this.props.screen.working_mode_button1,
      this.props.screen.working_mode_button2,
    ];

    const {
      freeControlIndex,
      feedBackMessageIndex,
      ringToneIndex,
      workingModeIndex,
      enableReportIndex,
    } = this.state;
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
            />
            <Input
              keyboardType={'numeric'}
              containerStyle={{paddingHorizontal: 0}}
              placeholder={this.props.screen.new_pwd_label}
              inputStyle={{
                color: this.props.theme.settings_system_subtitle,
              }}
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
          <FormWrapper title={this.props.screen.enable_report_label}>
            <ButtonGroupCustumized
              action={this.updateEnableReportIndex}
              index={enableReportIndex}
              buttons={activeOptions}
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
  };
};
export default connect(mapStateToProps)(SystemSettings);
