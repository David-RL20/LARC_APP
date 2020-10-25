import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, ButtonGroup} from 'react-native-elements';
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
      <View
        style={[
          style.container,
          {
            backgroundColor: this.props.theme.background,
          },
        ]}>
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
          />
        </FormWrapper>
        <FormWrapper title={this.props.screen.feedBMessage}>
          <Input
            containerStyle={{paddingHorizontal: 0}}
            placeholder={this.props.screen.feedHolder}
          />
        </FormWrapper>
      </View>
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
  },
});

export default connect(mapStateToProps)(ChannelIn);
