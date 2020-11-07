import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import Wrapper from '../../../utils/FormWrapperHorizontal';
import {connect} from 'react-redux';

class AplicacionPlatzi extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      chosenDate: '',
      chosenTime: '',
      isVisibleTime: false,
    };
  }

  handlePicker = (date) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(date).format('MMMM, Do YYYY'),
    });
  };

  showPicker = () => {
    this.setState({
      isVisible: true,
    });
  };
  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };

  handlePickerTime = (time) => {
    this.setState({
      isVisibleTime: false,
      chosenTime: moment(time).format('HH:mm'),
    });
  };

  showPickerTime = () => {
    this.setState({
      isVisibleTime: true,
    });
  };
  hidePickerTime = () => {
    this.setState({
      isVisibleTime: false,
    });
  };

  render() {
    return (
      <>
        <SafeAreaView
          style={[
            styles.container,
            {backgroundColor: this.props.theme.body_background},
          ]}>
          <Wrapper theme={this.props.theme} title={'Date :'}>
            <Button
              title={this.state.chosenDate || 'No seleccionada'}
              style={[
                styles.select_date_button,
                {backgroundColor: this.props.theme.body_background},
              ]}
              titleStyle={{color: this.props.theme.settings_history_title}}
              onPress={this.showPicker}
              buttonStyle={{
                borderColor: this.props.theme.settings_history_button_border,
              }}
              type="outline"
            />
          </Wrapper>
          <Wrapper theme={this.props.theme} title={'Hour :'}>
            <Button
              title={this.state.chosenTime || 'No seleccionada'}
              style={[
                styles.select_date_button,
                {backgroundColor: this.props.theme.body_background},
              ]}
              titleStyle={{color: this.props.theme.settings_history_title}}
              onPress={this.showPickerTime}
              buttonStyle={{
                borderColor: this.props.theme.settings_history_button_border,
              }}
              type="outline"
            />
          </Wrapper>
          <Button
            title={'Buscar'}
            buttonStyle={[
              styles.searchbutton,
              {
                backgroundColor: this.props.theme
                  .settings_history_button_background,
                borderColor: this.props.theme.settings_history_button_border,
              },
            ]}
            titleStyle={{color: this.props.theme.settings_history_button_title}}
          />

          <DateTimePickerModal
            isVisible={this.state.isVisible}
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}
            mode={'date'}
            is24Hour={false}
          />

          <DateTimePickerModal
            isVisible={this.state.isVisibleTime}
            onConfirm={this.handlePickerTime}
            onCancel={this.hidePickerTime}
            mode={'time'}
            is24Hour={false}
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  select_date_button: {
    height: 65,
    width: '80%',
    borderRadius: 30,
  },
  searchbutton: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
});
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    screen: state.screens.settings_history[state.currentLanguage],
  };
};
export default connect(mapStateToProps)(AplicacionPlatzi);
