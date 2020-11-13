import React, {Component} from 'react';
import {View, StyleSheet, Switch, Text} from 'react-native';
import ButtonGroupCustumized from '../../utils/ButtonComponentStyle';
import {connect} from 'react-redux';
import {setTheme, setLanguage} from '../../../Actions';
class ControlSettings extends Component {
  constructor() {
    super();
  }

  setTheme = () => {
    if (this.props.currentTheme == 'dark') this.props.setTheme('light');
    if (this.props.currentTheme == 'light') this.props.setTheme('dark');
  };
  setLanguage = () => {
    if (this.props.currentLanguage == 'eng') this.props.setLanguage('esp');
    if (this.props.currentLanguage == 'esp') this.props.setLanguage('eng');
  };

  mapVariables() {
    //dark mode
    this.isDarkMode = this.props.currentTheme == 'dark';
    this.availableLanguages = [this.props.screen.eng, this.props.screen.esp];
    this.selectedLanguage = this.props.currentLanguage == 'eng' ? 0 : 1;
  }

  render() {
    this.mapVariables();
    return (
      <View
        style={[
          style.container,
          {backgroundColor: this.props.theme.body_background},
        ]}>
        <View style={style.container_control}>
          <Text style={[style.text, {color: this.props.theme.header_title}]}>
            {this.props.screen.dark_mode}
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#999999'}}
            thumbColor={this.isDarkMode ? '#555555' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.setTheme}
            value={this.isDarkMode}
          />
        </View>
        <View style={style.container_control}>
          <Text style={[style.text, {color: this.props.theme.header_title}]}>
            {this.props.screen.language}
          </Text>
          <ButtonGroupCustumized
            action={this.setLanguage}
            index={this.selectedLanguage}
            buttons={this.availableLanguages}
            containerStyle={{width: 100}}
            textStyle={{fontSize: 10}}
            height={45}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_control: {
    width: '49%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
});

const mapStateToProps = (state) => {
  return {
    currentLanguage: state.currentLanguage,
    currentTheme: state.currentTheme,
    screen: state.screens.device_control[state.currentLanguage],
    theme: state.themes[state.currentTheme],
  };
};
const mapDispatchToProps = {
  setTheme,
  setLanguage,
};
export default connect(mapStateToProps, mapDispatchToProps)(ControlSettings);
