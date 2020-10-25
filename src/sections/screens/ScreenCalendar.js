import React from 'react';
import {View, StyleSheet} from 'react-native';
import Search from '../settings/calendar/SearchContact';
import ListContact from '../settings/calendar/ListContacts';
import AddContact from '../settings/calendar/AddContact';
const ScreenCalendar = (props) => {
  return (
    <>
      <View style={style.container}>
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
export default ScreenCalendar;
