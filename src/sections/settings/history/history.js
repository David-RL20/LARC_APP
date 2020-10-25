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

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

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
          <Text style={{color: 'red', fontSize: 20, marginBottom: 100}}>
            {this.state.chosenDate}
          </Text>

          <TouchableOpacity style={styles.button} onPress={this.showPicker}>
            <Text style={styles.text}>Show DatePicker</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#330066',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default AplicacionPlatzi;
