import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Overlay, Input} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux';
import {editContact} from '../../../../Actions';

//import {editContact} from '../../../Actions';
class EditContact extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      nameEdit: undefined,
      numberEdit: undefined,
      phoneEdit: undefined,
    };
    this.handleEditContact = this.handleEditContact.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  verifyEmptyValues() {
    this.state = {
      visible: true,
      nameEdit: this.state.nameEdit || this.props.route.params.name,
      numberEdit: this.state.numberEdit || this.props.route.params.number,
      phoneEdit: this.state.phoneEdit || this.props.route.params.phoneNumber,
    };
    if (
      this.state.phoneEdit !== '' &&
      this.state.nameEdit !== '' &&
      this.state.numberEdit !== ''
    ) {
      return true;
    }
    return false;
  }

  verifyLength() {
    if (
      this.state.phoneEdit.length !== 10 ||
      this.state.numberEdit.length !== 3
    ) {
      return true;
    }
    return false;
  }
  isAvailable = () => {
    let availablePhoneNumber = true,
      availableRegisterNumber = true;
    for (let i = 0; i < this.device.calendar.groups.length; i++) {
      for (let j = 0; j < this.device.calendar.groups[i].contacts.length; j++) {
        const contact = this.device.calendar.groups[i].contacts[j];
        if (contact.phoneNumber == this.state.phoneEdit) {
          availablePhoneNumber = false;
        }
        if (contact.number == this.state.numberEdit) {
          availableRegisterNumber = false;
        }
      }
    }
    return {availablePhoneNumber, availableRegisterNumber};
  };
  handleEditContact = () => {
    const {availablePhoneNumber, availableRegisterNumber} = this.isAvailable();
    console.log({availablePhoneNumber, availableRegisterNumber});
    if (this.verifyEmptyValues()) {
      if (availablePhoneNumber) {
        if (availableRegisterNumber) {
          if (this.verifyLength()) {
            Toast.show(this.props.screen_general.missing_numbers);
          } else {
            this.range = parseInt(this.state.numberEdit);

            if (this.range < 0 || this.range > 400) {
              Toast.show(this.props.screen_general.over_limits_toast);
            } else {
              this.props.editContact({
                phoneNumber: this.props.route.params.cellPhone,
                number: this.props.route.params.number,
                id: this.props.route.params.id,
                name: this.state.nameEdit || this.props.route.params.name,
                numberContact:
                  this.state.numberEdit || this.props.route.params.number,
                phoneNumberContact:
                  this.state.phoneEdit || this.props.route.params.phoneNumber,
              });
              Toast.show(this.props.screen.toasts.edit);
              this.goBack();
            }
          }
        } else {
          Toast.show(this.props.screen_general.registerNumber);
        }
      } else {
        Toast.show(this.props.screen_general.RegisterNumber_not_available);
      }
    } else {
      Toast.show(this.props.screen.toasts.edit_fail);
    }
  };

  goBack() {
    this.setState({
      ...this.state,
      visible: false,
    });
    this.props.navigation.goBack();
  }

  findDevice() {
    this.device = this.props.devices.filter(
      (device) => device.phoneNumber == this.cellPhone,
    );
    this.device = this.device[0];
  }

  render() {
    this.cellPhone = this.props.route.params.cellPhone;
    this.findDevice();
    return (
      <View
        style={{
          backgroundColor: this.props.theme.device_add_background,
        }}>
        <Overlay
          overlayStyle={[
            styles.Overlay,
            {backgroundColor: this.props.theme.overlay_background},
          ]}
          isVisible={this.state.visible}
          onBackdropPress={this.goBack}>
          <View style={[styles.container]}>
            <Text
              style={[
                styles.editTitle,
                {color: this.props.theme.overlay_title},
              ]}>
              {this.props.screen.edit_contact}
            </Text>
            <View style={styles.container_form}>
              <Text
                style={[styles.label, {color: this.props.theme.overlay_title}]}>
                {this.props.screen.name_label}
              </Text>
              <Input
                inputContainerStyle={styles.input_container_style}
                containerStyle={styles.input_container}
                defaultValue={this.props.route.params.name}
                inputStyle={{color: this.props.theme.overlay_title}}
                onChangeText={(text) => {
                  this.setState({
                    nameEdit: text,
                  });
                }}
              />
            </View>
            <View style={styles.container_form}>
              <Text
                style={[styles.label, {color: this.props.theme.overlay_title}]}>
                {this.props.screen.number_label}
              </Text>
              <Input
                keyboardType={'numeric'}
                inputContainerStyle={styles.input_container_style}
                containerStyle={styles.input_container}
                defaultValue={this.props.route.params.number}
                inputStyle={{color: this.props.theme.overlay_title}}
                maxLength={3}
                onChangeText={(text) => {
                  this.setState({
                    numberEdit: text,
                  });
                }}
              />
            </View>
            <View style={styles.container_form}>
              <Text
                style={[styles.label, {color: this.props.theme.overlay_title}]}>
                {this.props.screen.cel_label}
              </Text>
              <Input
                keyboardType="numeric"
                inputContainerStyle={styles.input_container_style}
                containerStyle={styles.input_container}
                defaultValue={this.props.route.params.phoneNumber}
                inputStyle={{color: this.props.theme.overlay_title}}
                onChangeText={(text) => {
                  this.setState({
                    phoneEdit: text,
                  });
                }}
                maxLength={10}
              />
            </View>
            <View style={styles.container_buttons}>
              <Button
                title={this.props.screen.add_cancel_label}
                buttonStyle={[
                  styles.button_cancel,
                  {backgroundColor: this.props.theme.overlay_button_regular},
                ]}
                onPress={this.goBack}
                titleStyle={{color: this.props.theme.overlay_button_title}}
              />
              <Button
                title={this.props.screen.add_confirm_label}
                buttonStyle={[
                  styles.button_confirm,
                  {backgroundColor: this.props.theme.overlay_button_primary},
                ]}
                titleStyle={{color: this.props.theme.overlay_button_title}}
                onPress={this.handleEditContact}
              />
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Overlay: {
    height: 450,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    width: '90%',
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  editTitle: {
    fontFamily: 'Roboto_Regular',
    fontSize: 25,
    fontWeight: 'bold',
  },
  container_form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  container_buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Roboto_Regular',
    fontSize: 17,
  },
  button_cancel: {
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button_confirm: {
    borderRadius: 5,
    paddingHorizontal: 20,
    marginLeft: 15,
  },
  input_container_style: {
    marginTop: 20,
  },
  input_container: {
    width: '70%',
  },
});
const mapDispatchToProps = {
  editContact,
};
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    screen: state.screens.device[state.currentLanguage],
    screen_general: state.screens.general[state.currentLanguage],
    devices: state.devices,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
