// Este componente contiene la seleccion del canal output y el control de abrir, cerrar, por tiempo y por llamada.
//los controles anteriormente explicados solo controlaran el dispositivo seleccionado con su canal seleccionado.
import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from '../../utils/Icon';
function Control() {
  return (
    <View style={style.container}>
      <View style={style.channelControl}>
        <Text style={style.labelChannel}>CHANNEL:</Text>

        <TouchableOpacity style={style.btnChannel}>
          <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnChannel}>
          <Text>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnChannel}>
          <Text>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnChannel}>
          <Text>4</Text>
        </TouchableOpacity>
      </View>

      <View style={style.deviceControl}>
        <Text style={style.nameDevice}> Device </Text>
        <Text style={style.numberDevice}> 66645623515 </Text>
        <View>
          <TouchableOpacity>1</TouchableOpacity>
          <TouchableOpacity>2</TouchableOpacity>
          <TouchableOpacity>3</TouchableOpacity>
          <TouchableOpacity>4</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
  channelControl: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  labelChannel: {
    flex: 1,
    fontSize: 20,
    color: 'black',
  },
  btnChannel: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  deviceControl: {},
  nameDevice: {},
  numberDevice: {},
});

export default Controll;
