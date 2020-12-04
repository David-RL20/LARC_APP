import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ItemGroup from './ItemGroup';
import Separator from '../../../utils/horizontalPaddingSeparator';

class ListGroup extends Component {
  renderItem({item}) {
    return (
      <ItemGroup
        navigation={this.props.navigation}
        phoneNumber={this.device.phoneNumber}
        item={item}
        theme={this.props.theme}
      />
    );
  }
  keyExtractor(item) {
    return item.group_name;
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
    this.phoneNumber = this.props.cellPhone;

    this.findDevice();

    return (
      <View style={style.FlatList_container}>
        <FlatList
          style={style.FlatList}
          data={this.device.calendar.groups}
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

export default connect(mapStateToProps)(ListGroup);
