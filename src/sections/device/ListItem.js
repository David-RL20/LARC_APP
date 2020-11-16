import React, {useState, Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Button, Overlay, Input} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux';
import {deleteDevice, editDevice} from '../../../Actions';
import Icon from '../../utils/Icon';

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      phoneEdit: '',
      nameEdit: '',
    };
    this.width = 20;
    this.height = 24;
    this.handleDeleteDevice = this.handleDeleteDevice.bind(this);
    this.handleEditDevice = this.handleEditDevice.bind(this);
    this.toggleOverlayEdit = this.toggleOverlayEdit.bind(this);
  }

  handleDeleteDevice = () => {
    Alert.alert(
      this.props.screen.alerts.delete,
      this.props.screen.alerts.deleteAsk,
      [
        {
          text: this.props.screen.alerts.add_cancel_label,
          onPress: () => {
            Toast.show(this.props.screen.toasts.delete_cancel);
          },
        },
        {
          text: this.props.screen.alerts.add_confirm_label,
          onPress: () => {
            this.props.deleteDevice({
              phoneNumber: this.props.item.phoneNumber,
            });
            Toast.show(this.props.screen.toasts.delete);
          },
        },
      ],
    );
  };
  handleEditDevice = () => {
    if (this.state.phoneEdit == '' && this.state.nameEdit == '') {
      Toast.show(this.props.screen.toasts.edit_fail);
    } else {
      this.props.editDevice({
        phoneNumber: this.props.item.phoneNumber,
        name: this.props.item.name,
        phoneEdit: this.state.phoneEdit || this.props.item.phoneNumber,
        nameEdit: this.state.nameEdit || this.props.item.name,
      });
      Toast.show(this.props.screen.toasts.edit);
      this.setState({
        phoneEdit: '',
        nameEdit: '',
      });
      this.toggleOverlayEdit();
    }
  };

  toggleOverlayEdit = () => {
    this.setState({visible: !this.state.visible});
  };

  render() {
    return (
      <>
        <View
          style={[
            style.container,
            {borderColor: this.props.theme.device_list_border},
          ]}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('DeviceControl', {
                phone: this.props.item.phoneNumber,
              })
            }
            style={[
              style.picture_name_container,
              {backgroundColor: this.props.theme.body_background},
            ]}>
            <Icon width="37" height="38" name="profile" />
            <View style={style.name_phone_container}>
              <Text
                style={[
                  style.name_device,
                  {color: this.props.theme.device_list_title},
                ]}>
                {this.props.item.name}
              </Text>
              <Text
                style={[
                  style.phone_device,
                  {color: this.props.theme.device_list_subtitle},
                ]}>
                {this.props.item.phoneNumber}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={style.icons_container}>
            <TouchableOpacity
              onPress={this.handleDeleteDevice}
              style={style.icon}>
              <Icon width={this.width} height={this.height} name="delete" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.toggleOverlayEdit}
              style={style.icon}>
              <Icon width={this.width} height={this.height} name="edit" />
            </TouchableOpacity>
          </View>
        </View>
        {/*****************Ovarlay Edit******************* */}
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
            onBackdropPress={this.toggleOverlayEdit}>
            <View style={[styles.container]}>
              <Text
                style={[
                  styles.editTitle,
                  {color: this.props.theme.overlay_title},
                ]}>
                {this.props.screen.edit}
              </Text>
              <View style={styles.container_form}>
                <Text
                  style={[
                    styles.label,
                    {color: this.props.theme.overlay_title},
                  ]}>
                  {this.props.screen.name_label}
                </Text>
                <Input
                  inputContainerStyle={styles.input_container_style}
                  containerStyle={styles.input_container}
                  placeholder={this.props.item.name}
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
                  style={[
                    styles.label,
                    {color: this.props.theme.overlay_title},
                  ]}>
                  {this.props.screen.cel_label}
                </Text>
                <Input
                  keyboardType="numeric"
                  inputContainerStyle={styles.input_container_style}
                  containerStyle={styles.input_container}
                  placeholder={this.props.item.phoneNumber}
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
                  onPress={this.toggleOverlayEdit}
                  titleStyle={{color: this.props.theme.overlay_button_title}}
                />
                <Button
                  title={this.props.screen.add_confirm_label}
                  buttonStyle={[
                    styles.button_confirm,
                    {backgroundColor: this.props.theme.overlay_button_primary},
                  ]}
                  titleStyle={{color: this.props.theme.overlay_button_title}}
                  onPress={this.handleEditDevice}
                />
              </View>
            </View>
          </Overlay>
        </View>
      </>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    borderWidth: 1,
    borderRadius: 2,
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

const styles = StyleSheet.create({
  Overlay: {
    height: 350,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    width: '90%',
    paddingVertical: 30,
    paddingHorizontal: 10,
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
  deleteDevice,
  editDevice,
};
export default connect(null, mapDispatchToProps)(ListItem);
