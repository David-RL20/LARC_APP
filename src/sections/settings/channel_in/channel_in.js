import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text} from 'react-native';
import {Input} from 'react-native-elements';
import FormWrapper from '../../../utils/FormWrapper';
import {connect} from 'react-redux';
import ButtonGroupCustumized from '../../../utils/ButtonComponentStyle';

class ChannelIn extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      selectedChannel: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.updateChannel = this.updateChannel.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }
  updateChannel(selectedChannel) {
    this.setState({selectedChannel});
  }
  render() {
    const buttons = [this.props.screen.call_on, this.props.screen.call_off];
    const {selectedIndex} = this.state;

    const buttonsChannel = [1, 2];
    const {selectedChannel} = this.state;
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
                action={this.updateChannel}
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
  };
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

export default connect(mapStateToProps)(ChannelIn);
