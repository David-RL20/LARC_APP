// Este componente contiene la seleccion del canal output y el control de abrir, cerrar, por tiempo y por llamada.
//los controles anteriormente explicados solo controlaran el dispositivo seleccionado con su canal seleccionado.
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from '../../utils/Icon';

class Controll extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: null,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }
  render() {
    const buttons = [1, 2, 3, 4];
    const {selectedIndex} = this.state;
    return (
      <View
        style={[
          style.container,
          {backgroundColor: this.props.theme.body_background},
        ]}>
        {/* Channel control */}
        <View style={style.container_control}>
          <Text
            style={[
              style.labelChannel,
              {color: this.props.theme.control_title},
            ]}>
            {this.props.screen.title} :
          </Text>

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{
              height: 40,
              width: 150,
              margin: 0,
              backgroundColor: this.props.theme.body_background,
              borderColor: this.props.theme.control_channel_borders,
            }}
            innerBorderStyle={{
              color: this.props.theme.control_channel_borders,
            }}
            textStyle={{color: this.props.theme.control_channel_numbers}}
            selectedButtonStyle={{
              backgroundColor: this.props.theme.control_channel_selected,
            }}
            selectedTextStyle={{
              color: this.props.theme.control_channel_selected_title,
            }}
          />
        </View>
        {/* Device control */}
        <View style={style.deviceControl}>
          <View>
            <Text
              style={[
                style.nameDevice,
                {color: this.props.theme.control_title},
              ]}>
              Device
            </Text>
            <Text
              style={[
                style.numberDevice,
                {color: this.props.theme.control_subtitle},
              ]}>
              66645623515
            </Text>
          </View>
          <View style={style.container_icons}>
            <TouchableOpacity style={style.container_action_button}>
              <Icon name="unlock" />
            </TouchableOpacity>
            <TouchableOpacity style={style.container_action_button}>
              <Icon name="lock" />
            </TouchableOpacity>
            <TouchableOpacity style={style.container_action_button}>
              <Icon name="time" />
            </TouchableOpacity>
            <TouchableOpacity style={style.container_action_button}>
              <Icon name="phone" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {},
  container_control: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  container_control_buttons: {
    width: '80%',
  },
  control_button_label: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  deviceControl: {
    height: 500,
    paddingHorizontal: 20,
  },
  nameDevice: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
  },
  numberDevice: {
    fontSize: 23,
    fontFamily: 'Roboto-Regular',
  },
  container_icons: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 25,
  },
  container_action_button: {
    padding: 20,
    width: '50%',
  },
});

const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    screen: state.screens.device_control[state.currentLanguage],
  };
};
export default connect(mapStateToProps)(Controll);
