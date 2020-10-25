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
    };
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm'),
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

  render() {
    return (
      <>
        <View style={styles.container}>
          <Wrapper theme={this.props.theme} title={'Date :'}>
            <Button
              title={this.state.chosenDate || 'No seleccionada'}
              style={[
                styles.select_date_button,
                {backgroundColor: this.props.theme.letter},
              ]}
              titleStyle={{color: this.props.theme.letterAlternative}}
              onPress={this.showPicker}
              type="outline"
            />
          </Wrapper>
          <Wrapper theme={this.props.theme} title={'Hour :'}>
            <Button
              title={this.state.chosenDate || 'No seleccionada'}
              style={[
                styles.select_date_button,
                {backgroundColor: this.props.theme.letter},
              ]}
              titleStyle={{color: this.props.theme.letterAlternative}}
              onPress={this.showPicker}
              type="outline"
            />
          </Wrapper>
          <Button
            title={'Buscar'}
            buttonStyle={[
              styles.searchbutton,
              {backgroundColor: this.props.theme.primary},
            ]}
            titleStyle={{color: this.props.theme.letterAlternative}}
          />

          <DateTimePickerModal
            isVisible={this.state.isVisible}
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}
            mode={'datetime'}
            is24Hour={false}
          />
        </View>
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
