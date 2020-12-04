import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from '../../../utils/Icon';

class ItemGroup extends Component {
  constructor() {
    super();
    this.redirect = this.redirect.bind(this);
  }
  redirect() {
    this.props.navigation.navigate('contactScreen', {
      cellphone: this.props.phoneNumber,
      group_id: this.props.item.id,
    });
  }
  render() {
    return (
      <TouchableOpacity
        style={[
          style.container,
          {borderColor: this.props.theme.settings_border},
        ]}
        onPress={this.redirect}>
        <Icon />
        <Text>{this.props.item.group_name}</Text>
        <View>
          <TouchableOpacity>
            <Icon />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 65,
    borderWidth: 1,
    width: '90%',
  },
});

export default ItemGroup;
