import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Button, Overlay, Input} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux';
import {deleteDevice, editDevice} from '../../../Actions';
import Icon from '../../utils/Icon';

const ListItem = ({
  item,
  theme,
  navigation,
  deleteDevice,
  editDevice,
  screen,
}) => {
  const width = 20;
  const height = 24;

  const [state, set] = useState({
    visible: false,
    phoneEdit: '',
    nameEdit: '',
  });

  const handleDeleteDevice = () => {
    Alert.alert(screen.alerts.delete, screen.alerts.deleteAsk, [
      {
        text: screen.alerts.add_cancel_label,
        onPress: () => {
          Toast.show(screen.toasts.delete_cancel);
        },
      },
      {
        text: screen.alerts.add_confirm_label,
        onPress: () => {
          deleteDevice({
            phoneNumber: item.phoneNumber,
          });
          Toast.show(screen.toasts.delete);
        },
      },
    ]);
  };
  const handleEditDevice = () => {
    if (state.phoneEdit == '' && state.nameEdit == '') {
      Toast.show(screen.toasts.edit_fail);
    } else {
      editDevice({
        phoneNumber: item.phoneNumber,
        name: item.name,
        phoneEdit: state.phoneEdit || item.phoneNumber,
        nameEdit: state.nameEdit || item.name,
      });
      Toast.show(screen.toasts.edit);
      set({
        ...state,
        phoneEdit: '',
        nameEdit: '',
      });
      toggleOverlayEdit();
    }
  };

  const toggleOverlayEdit = () => {
    set({...state, visible: !state.visible});
  };
  console.log(state.visible);
  return (
    <>
      <View style={[style.container, {borderColor: theme.device_list_border}]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DeviceControl', {phone: item.phoneNumber})
          }
          style={[
            style.picture_name_container,
            {backgroundColor: theme.body_background},
          ]}>
          <Icon width="37" height="38" name="profile" />
          <View style={style.name_phone_container}>
            <Text style={[style.name_device, {color: theme.device_list_title}]}>
              {item.name}
            </Text>
            <Text
              style={[style.phone_device, {color: theme.device_list_subtitle}]}>
              {item.phoneNumber}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={style.icons_container}>
          <TouchableOpacity onPress={handleDeleteDevice} style={style.icon}>
            <Icon width={width} height={height} name="delete" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleOverlayEdit} style={style.icon}>
            <Icon width={width} height={height} name="edit" />
          </TouchableOpacity>
        </View>
      </View>
      {/*****************Ovarlay Edit******************* */}
      <View
        style={{
          backgroundColor: theme.device_add_background,
        }}>
        <Overlay
          overlayStyle={[
            styles.Overlay,
            {backgroundColor: theme.overlay_background},
          ]}
          isVisible={state.visible}
          onBackdropPress={toggleOverlayEdit}>
          <View style={[styles.container]}>
            <Text style={[styles.editTitle, {color: theme.overlay_title}]}>
              {screen.edit}
            </Text>
            <View style={styles.container_form}>
              <Text style={[styles.label, {color: theme.overlay_title}]}>
                {screen.name_label}
              </Text>
              <Input
                inputContainerStyle={styles.input_container_style}
                containerStyle={styles.input_container}
                placeholder={item.name}
                inputStyle={{color: theme.overlay_title}}
                onChangeText={(text) => {
                  set({
                    ...state,
                    nameEdit: text,
                  });
                }}
              />
            </View>
            <View style={styles.container_form}>
              <Text style={[styles.label, {color: theme.overlay_title}]}>
                {screen.cel_label}
              </Text>
              <Input
                keyboardType="numeric"
                inputContainerStyle={styles.input_container_style}
                containerStyle={styles.input_container}
                placeholder={item.phoneNumber}
                inputStyle={{color: theme.overlay_title}}
                onChangeText={(text) => {
                  set({
                    ...state,
                    phoneEdit: text,
                  });
                }}
                maxLength={10}
              />
            </View>
            <View style={styles.container_buttons}>
              <Button
                title={screen.add_cancel_label}
                buttonStyle={[
                  styles.button_cancel,
                  {backgroundColor: theme.overlay_button_regular},
                ]}
                onPress={toggleOverlayEdit}
                titleStyle={{color: theme.overlay_button_title}}
              />
              <Button
                title={screen.add_confirm_label}
                buttonStyle={[
                  styles.button_confirm,
                  {backgroundColor: theme.overlay_button_primary},
                ]}
                titleStyle={{color: theme.overlay_button_title}}
                onPress={handleEditDevice}
              />
            </View>
          </View>
        </Overlay>
      </View>
    </>
  );
};
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
