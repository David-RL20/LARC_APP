import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, ButtonGroup} from 'react-native-elements';
import FormWrapper from '../../../utils/FormWrapper';

const SystemSettings = (props) => {
  const buttons = ['Hello', 'World', 'Buttons'];
  const {selectedIndex} = 2;
  return (
    <View style={style.container}>
      <FormWrapper title="Control Libre">
        <ButtonGroup
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}}
        />
      </FormWrapper>
      <FormWrapper title="Mensaje de Feedback">
        <ButtonGroup
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}}
        />
      </FormWrapper>
      <FormWrapper
        containerStyle={{height: 160}}
        title="Actualizacion de contraseña">
        <Input
          keyboardType={'numeric'}
          containerStyle={{paddingHorizontal: 0}}
          placeholder="Contraseña actual"
        />
        <Input
          keyboardType={'numeric'}
          containerStyle={{paddingHorizontal: 0}}
          placeholder="Contraseña nueva"
        />
      </FormWrapper>
      <FormWrapper title="Llamada o tono">
        <ButtonGroup
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}}
        />
      </FormWrapper>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});

export default SystemSettings;
