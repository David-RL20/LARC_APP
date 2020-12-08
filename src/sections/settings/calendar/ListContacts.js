import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ContactItem from './ContactItem';
import {connect} from 'react-redux';
import Separator from '../../../utils/horizontalPaddingSeparator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
class ListContact extends Component {
  renderItem({item}) {
    return (
      <ContactItem
        navigation={this.props.navigation}
        phoneNumber={this.device.phoneNumber}
        group_id={this.props.group_id}
        item={item}
        theme={this.props.theme}
      />
    );
  }
  keyExtractor(item) {
    return item.number.toString();
  }
  renderSeparator() {
    return <Separator />;
  }
  findDevice() {
    this.device = this.props.devices.filter(
      (device) => device.phoneNumber == this.phoneNumber,
    );
    this.device = this.device[0];
    //si el id es igual a 1, significa que esta en la posicion 0
    this.data = this.device.calendar.groups[this.props.group_id - 1].contacts;
  }
  render() {
    this.phoneNumber = this.props.cellphone;
    this.findDevice();

    return (
      <View style={style.FlatList_container}>
        <FlatList
          style={[style.FlatList,]}
          data={this.data}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  FlatList_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    devices: state.devices,
  };
};

export default connect(mapStateToProps)(ListContact);
