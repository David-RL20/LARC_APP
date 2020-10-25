import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from '../../utils/Icon';
const ListItem = ({item, theme, navigation}) => {
  const width = 20;
  const height = 24;
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DeviceControl')}
        style={style.picture_name_container}>
        <Icon width="37" height="38" name="profile" />
        <View style={style.name_phone_container}>
          <Text style={style.name_device}>{item.name}</Text>
          <Text style={style.phone_device}>{item.phoneNumber}</Text>
        </View>
      </TouchableOpacity>

      <View style={style.icons_container}>
        <TouchableOpacity style={style.icon}>
          <Icon width={width} height={height} name="delete" />
        </TouchableOpacity>
        <TouchableOpacity style={style.icon}>
          <Icon width={width} height={height} name="edit" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    borderWidth: 1,
  },
  picture_name_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F4E6',
    width: '75%',
    padding: 10,
  },
  name_phone_container: {
    padding: 10,
  },
  name_device: {
    fontSize: 18,
    fontFamily: 'Roboto_Bold',
    fontWeight: 'bold',
  },
  phone_device: {
    fontSize: 14,
    fontFamily: 'Roboto_Regular',
  },
  icons_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  icon: {
    paddingHorizontal: 7,
  },
});

export default ListItem;
