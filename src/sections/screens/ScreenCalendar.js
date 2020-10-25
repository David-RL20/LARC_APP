import React from 'react';
import {View, StyleSheet} from 'react-native';
import Search from '../settings/calendar/SearchContact';
import ListContact from '../settings/calendar/ListContacts';
import AddContact from '../settings/calendar/AddContact';
import {connect} from 'react-redux';
const ScreenCalendar = (props) => {
  return (
    <>
      <View
        style={[style.container, {backgroundColor: props.theme.background}]}>
        <Search />
        <ListContact />
      </View>
      <AddContact />
    </>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
  };
};
export default connect(mapStateToProps)(ScreenCalendar);
