/*Este componente solo se visualiza si elusuario da tap al boton de agregar dispositivo
Es una especie de over layout que recibe un formulario que debe ser completado todos sus campos
ademas despues de confirmarlo este se debe agregar ala memoria
*/
import React, {useState} from 'react';
import {Button, Overlay, Input} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const AddDevice = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button
        title={props.device_screen.add}
        buttonStyle={{
          backgroundColor: props.theme.letterAlternative,
        }}
        titleStyle={{color: props.theme.letter}}
        onPress={toggleOverlay}
      />

      <Overlay
        overlayStyle={[
          style.Overlay,
          {backgroundColor: props.theme.letterAlternative},
        ]}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <View style={[style.container]}>
          <View style={style.container_form}>
            <Text style={[style.label, {color: props.theme.letter}]}>
              {props.device_screen.name_label}
            </Text>
            <Input
              inputContainerStyle={style.input_container_style}
              containerStyle={style.input_container}
              placeholder={props.device_screen.name_placeholder_label}
              inputStyle={{color: props.theme.primary}}
            />
          </View>
          <View style={style.container_form}>
            <Text style={[style.label, {color: props.theme.letter}]}>
              {props.device_screen.cel_label}
            </Text>
            <Input
              keyboardType="numeric"
              inputContainerStyle={style.input_container_style}
              containerStyle={style.input_container}
              placeholder="664*******"
              inputStyle={{color: props.theme.primary}}
            />
          </View>
          <View style={style.container_buttons}>
            <Button
              title={props.device_screen.add_cancel_label}
              buttonStyle={[
                style.button_cancel,
                {backgroundColor: props.theme.letter},
              ]}
              titleStyle={{color: props.theme.letterAlternative}}
            />
            <Button
              title={props.device_screen.add_confirm_label}
              buttonStyle={[
                style.button_confirm,
                {backgroundColor: props.theme.primary},
              ]}
              titleStyle={{color: props.theme.letterAlternative}}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    device_screen: state.screens.device[state.currentLanguage],
  };
};

const style = StyleSheet.create({
  Overlay: {
    height: 350,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    width: '80%',
    paddingVertical: 30,
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

export default connect(mapStateToProps)(AddDevice);
