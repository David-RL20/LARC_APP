import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {OverLay, Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';

const Calendar = (props) => {
  return (
    <View style={style.container_search}>
      <Text
        style={[
          style.label_search,
          {color: props.theme.settings_calendar_title},
        ]}>
        {props.calendar.searchLabel} :
      </Text>
      <Input
        keyboardType="numeric"
        placeholder="664*******"
        inputContainerStyle={style.input_container_style}
        inputStyle={{color: props.theme.settings_calendar_title}}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container_search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    paddingHorizontal: 10,
  },
  label_search: {
    fontFamily: 'Roboto_Bold',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input_container_style: {
    marginTop: 22,
    width: '80%',
  },
});
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    calendar: state.screens.settings_calendar[state.currentLanguage],
  };
};
export default connect(mapStateToProps)(Calendar);
