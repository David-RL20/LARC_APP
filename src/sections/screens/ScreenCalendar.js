import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Search from '../settings/calendar/SearchContact';
import ListContact from '../settings/calendar/ListContacts';
import AddContact from '../settings/calendar/AddContact';
import {connect} from 'react-redux';
const ScreenCalendar = (props) => {
  return (
    <>
      <SafeAreaView
        style={[
          style.container,
          {backgroundColor: props.theme.body_background},
        ]}>
        <Search />
        <ListContact />
      </SafeAreaView>
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
