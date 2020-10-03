// Este componente contiene la seleccion del canal output y el control de abrir, cerrar, por tiempo y por llamada.
//los controles anteriormente explicados solo controlaran el dispositivo seleccionado con su canal seleccionado.
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from '../../utils/Icon';

function Controll(props) {
  return (
    <View style={[style.container, {backgroundColor: props.background}]}>
      {/* Channel control */}
      <View style={style.container_control}>
        <Text style={[style.labelChannel, {color: props.titleNormal}]}>
          Output:
        </Text>

        <View style={style.container_control_buttons}>
          <TouchableOpacity
            style={[
              style.btnChannel,
              {
                backgroundColor: props.background,
                color: props.titleNormal,
                borderColor: props.borderColor,
              },
            ]}>
            <Text
              style={[
                style.control_button_label,
                {
                  backgroundColor: props.background,
                  color: props.titleNormal,
                },
              ]}>
              1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              style.btnChannel,
              {
                backgroundColor: props.background,
                color: props.titleNormal,
                borderColor: props.borderColor,
              },
            ]}>
            <Text
              style={[
                style.control_button_label,
                {
                  backgroundColor: props.background,
                  color: props.titleNormal,
                },
              ]}>
              2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              style.btnChannel,
              {
                backgroundColor: props.background,
                color: props.titleNormal,
                borderColor: props.borderColor,
              },
            ]}>
            <Text
              style={[
                style.control_button_label,
                {
                  backgroundColor: props.background,
                  color: props.titleNormal,
                },
              ]}>
              3
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              style.btnChannel,
              {
                backgroundColor: props.background,
                color: props.titleNormal,
                borderColor: props.borderColor,
              },
            ]}>
            <Text
              style={[
                style.control_button_label,
                {
                  backgroundColor: props.background,
                  color: props.titleNormal,
                },
              ]}>
              4
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Device control */}
      <View style={style.deviceControl}>
        <View>
          <Text style={[style.nameDevice, {color: props.titleNormal}]}>
            Device
          </Text>
          <Text style={[style.numberDevice, {color: props.letterAlternative}]}>
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

const style = StyleSheet.create({
  container: {},
  container_control: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  container_control_buttons: {
    flex: 1,
    flexWrap: 'wrap',
  },
  control_button_label: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  labelChannel: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  btnChannel: {
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#cccccc',
    borderWidth: 1,
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
  return state.themes[state.currentTheme];
};
export default connect(mapStateToProps)(Controll);
