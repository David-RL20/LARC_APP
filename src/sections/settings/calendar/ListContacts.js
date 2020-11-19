import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ContactItem from './ContactItem';
import {connect} from 'react-redux';
import Separator from '../../../utils/horizontalPaddingSeparator';
class ListContact extends Component {
  renderItem({item}) {
    return (
      <ContactItem
        phoneNumber={this.device.phoneNumber}
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
  }
  render() {
    this.phoneNumber = this.props.cellphone;
    this.findDevice();
    return (
      <View style={style.FlatList_container}>
        <FlatList
          style={style.FlatList}
          data={this.device.calendar.contacts}
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
