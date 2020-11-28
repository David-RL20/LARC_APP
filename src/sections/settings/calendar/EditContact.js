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
      nameEdit: '',
      numberEdit: '',
      phoneEdit: '',
    };
    this.handleEditContact = this.handleEditContact.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleEditContact = () => {
    if (
      this.state.phoneEdit !== '' &&
      this.state.nameEdit !== '' &&
      this.state.numberEdit !== ''
    ) {
      if (
        this.state.phoneEdit.length !== 10 ||
        this.state.numberEdit.length !== 3
      ) {
        Toast.show('Falta numeros');
      } else {
        this.range = parseInt(this.state.numberEdit);

        if (this.range < 0 || this.range > 400) {
          Toast.show('Superaste el limite');
        } else {
          this.props.editContact({
            phoneNumber: this.props.route.params.cellPhone,
            number: this.props.route.params.number,
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

  render() {
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
                placeholder={this.props.route.params.name}
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
                placeholder={this.props.route.params.number}
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
                placeholder={this.props.route.params.phoneNumber}
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
