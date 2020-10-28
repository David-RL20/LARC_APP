import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {Input} from 'react-native-elements';
import FormWrapper from '../../../utils/FormWrapper';
import {connect} from 'react-redux';
import ButtonGroupCustumized from '../../../utils/ButtonComponentStyle';

class ChannelIn extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }
  render() {
    const buttons = [this.props.screen.call_on, this.props.screen.call_off];
    const {selectedIndex} = this.state;
    return (
      <SafeAreaView
        style={[
          style.container,
          {
            backgroundColor: this.props.theme.body_background,
          },
        ]}>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={80}>
          <FormWrapper title={this.props.screen.channel_name}>
            <Input
              disabled
              containerStyle={{paddingHorizontal: 0}}
              placeholder={this.props.screen.placeholder}
            />
          </FormWrapper>
          <FormWrapper title={this.props.screen.call}>
            <ButtonGroupCustumized
              action={this.updateIndex}
              index={selectedIndex}
              buttons={buttons}
            />
          </FormWrapper>

          <FormWrapper title={this.props.screen.emergNumber}>
            <Input
              keyboardType={'numeric'}
              containerStyle={{paddingHorizontal: 0}}
              placeholder={this.props.screen.emergHolder}
              inputStyle={{color: this.props.theme.settings_in_subtitle}}
            />
          </FormWrapper>
          <FormWrapper title={this.props.screen.feedBMessage}>
            <Input
              containerStyle={{paddingHorizontal: 0}}
              placeholder={this.props.screen.feedHolder}
              inputStyle={{color: this.props.theme.settings_in_subtitle}}
            />
          </FormWrapper>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    screen: state.screens.settings_channel_in[state.currentLanguage],
  };
};
const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
  },
});

export default connect(mapStateToProps)(ChannelIn);
