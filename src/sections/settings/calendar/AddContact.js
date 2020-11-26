/*Este componente solo se visualiza si elusuario da tap al boton de agregar dispositivo
Es una especie de over layout que recibe un formulario que debe ser completado todos sus campos
ademas despues de confirmarlo este se debe agregar ala memoria
*/
import React, {useState} from 'react';
import {Button, Overlay, Input} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {addContact} from '../../../../Actions';
const AddDevice = (props) => {
  const [state, setState] = useState({
    isVisible: false,
    input_register_number: '',
    input_cellphone: '',
    input_name: '',
  });

  const toggleOverlay = () => {
    setState({
      ...state,
      isVisible: !state.isVisible,
    });
  };
  const addContact = () => {
    props.addContact({
      name: state.input_name,
      number: state.input_register_number,
      phoneNumber: state.input_cellphone,
      phoneNumberDevice: props.cellphone,
    });
    toggleOverlay();
  };

  return (
    <View
      style={{
        backgroundColor: props.theme.overlay_background,
      }}>
      <Button
        title={props.device_screen.add}
        buttonStyle={{
          backgroundColor: props.theme.overlay_background,
        }}
        titleStyle={{color: props.theme.overlay_title}}
        onPress={toggleOverlay}
      />

      <Overlay
        overlayStyle={[
          style.Overlay,
          {backgroundColor: props.theme.overlay_background},
        ]}
        isVisible={state.isVisible}
        onBackdropPress={toggleOverlay}>
        <View style={[style.container]}>
          <View style={style.container_form}>
            <Text style={[style.label, {color: props.theme.overlay_title}]}>
              {props.device_screen.name_label} :
            </Text>
            <Input
              inputContainerStyle={style.input_container_style}
              containerStyle={style.input_container}
              placeholder={props.device_screen.name_placeholder_label}
              inputStyle={{color: props.theme.overlay_title}}
              onChangeText={(text) => {
                setState({
                  ...state,
                  input_name: text,
                });
              }}
            />
          </View>
          <View style={style.container_form}>
            <Text style={[style.label, {color: props.theme.overlay_title}]}>
              {props.device_screen.RegisterNumber} :
            </Text>
            <Input
              keyboardType="numeric"
              inputContainerStyle={style.input_container_style}
              containerStyle={style.input_container}
              placeholder={props.device_screen.number_placeholder_label}
              inputStyle={{color: props.theme.overlay_title}}
              maxLength={3}
              onChangeText={(text) => {
                setState({
                  ...state,
                  input_register_number: text,
                });
              }}
            />
          </View>

          <View style={style.container_form}>
            <Text style={[style.label, {color: props.theme.overlay_title}]}>
              {props.device_screen.cel_label} :
            </Text>
            <Input
              keyboardType="numeric"
              inputContainerStyle={style.input_container_style}
              containerStyle={style.input_container}
              placeholder="664*******"
              inputStyle={{color: props.theme.overlay_title}}
              maxLength={10}
              onChangeText={(text) => {
                setState({
                  ...state,
                  input_cellphone: text,
                });
              }}
            />
          </View>

          <View style={style.container_buttons}>
            <Button
              title={props.device_screen.add_cancel_label}
              buttonStyle={[
                style.button_cancel,
                {backgroundColor: props.theme.overlay_button_regular},
              ]}
              titleStyle={{color: props.theme.overlay_button_title}}
              onPress={toggleOverlay}
            />
            <Button
              title={props.device_screen.add_confirm_label}
              buttonStyle={[
                style.button_confirm,
                {backgroundColor: props.theme.overlay_button_primary},
              ]}
              titleStyle={{color: props.theme.overlay_button_title}}
              onPress={addContact}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const style = StyleSheet.create({
  Overlay: {
    height: 450,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container_form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  container_buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
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
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    device_screen: state.screens.settings_calendar[state.currentLanguage],
  };
};

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDevice);
