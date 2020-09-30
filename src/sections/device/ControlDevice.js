// Este componente contiene la seleccion del canal output y el control de abrir, cerrar, por tiempo y por llamada.
//los controles anteriormente explicados solo controlaran el dispositivo seleccionado con su canal seleccionado.
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

function Controll() {
  return (
    <View style={style.container}>
      <View>CHANNE:</View>
      <View style={style.device}>
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

export default Controll;
