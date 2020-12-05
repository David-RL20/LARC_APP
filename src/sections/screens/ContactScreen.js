import React, {Component} from 'react';
import {View} from 'react-native';
import ListContact from '../settings/calendar/ListContacts';
import AddContact from '../settings/calendar/AddContact';
class ContactScreen extends Component {
  render() {
    return (
      <>
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <ListContact
            cellphone={this.props.route.params.cellphone}
            group_id={this.props.route.params.group_id}
            navigation={this.props.navigation}
          />
        </View>
        <AddContact
          group_id={this.props.route.params.group_id}
          cellphone={this.props.route.params.cellphone}
        />
      </>
    );
  }
}

export default ContactScreen;
