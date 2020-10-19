import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, ButtonGroup} from 'react-native-elements';
import FormWrapper from '../../../utils/FormWrapper';

const ChannelOut = (props) => {
  const buttons = ['Hello', 'World', 'Buttons'];
  const {selectedIndex} = 2;
  return (
    <View style={style.container}>
      <FormWrapper title="Nombre del canal">
        <Input
          disabled
          containerStyle={{paddingHorizontal: 0}}
          placeholder="Canal"
        />
      </FormWrapper>
      <FormWrapper title="Tipo de activacion">
        <ButtonGroup
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}}
        />
      </FormWrapper>
      <FormWrapper title="Tiempo base">
        <ButtonGroup
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}}
        />
      </FormWrapper>
      <FormWrapper title="Tiempo de activacion">
        <Input
          keyboardType={'numeric'}
          containerStyle={{paddingHorizontal: 0}}
          placeholder="Canal"
        />
      </FormWrapper>
      <FormWrapper title="Mensaje de activacion">
        <Input containerStyle={{paddingHorizontal: 0}} placeholder="Canal" />
      </FormWrapper>
      <FormWrapper title="Mensaje de Feedback">
        <Input containerStyle={{paddingHorizontal: 0}} placeholder="Canal" />
      </FormWrapper>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});

export default ChannelOut;
