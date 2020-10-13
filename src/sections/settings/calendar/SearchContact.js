import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {OverLay, Button, Input} from 'react-native-elements';

const Calendar = (props) => {
  return (
    <View style={style.container}>
      <View style={style.container_search}>
        <Text style={style.label_search}>Buscar :</Text>
        <Input placeholder="#***" />
      </View>
    </View>
  );
};
const style = StyleSheet.create({});
export default Calendar;
