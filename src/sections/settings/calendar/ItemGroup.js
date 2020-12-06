import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from '../../../utils/Icon';
import {connect} from 'react-redux';
import {deleteGroup} from '../../../../Actions';
class ItemGroup extends Component {
  constructor() {
    super();
    this.redirect = this.redirect.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }
  redirect() {
    this.props.navigation.navigate('contactScreen', {
      cellphone: this.props.phoneNumber,
      group_id: this.props.item.id,
    });
  }
  deleteGroup() {
    this.props.deleteGroup({
      phoneNumber: this.props.phoneNumber,
      id: this.props.item.id,
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
        <View style={style.icon_title_container}>
          <Icon name="delete" width="40" />
          <Text
            style={[
              style.title,
              {color: this.props.theme.settings_calendar_group_title},
            ]}>
            {this.props.item.group_name}
          </Text>
        </View>
        <View style={style.delete_container}>
          {this.props.item.contacts.length == 0 && (
            <TouchableOpacity onPress={this.deleteGroup}>
              <Icon name="delete" width="30" />
            </TouchableOpacity>
          )}
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
    paddingHorizontal: 10,
  },
  icon_title_container: {
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  delete_container: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    paddingLeft: 10,
  },
});

const mapDistpatchToProps = {
  deleteGroup,
};
export default connect(null, mapDistpatchToProps)(ItemGroup);
