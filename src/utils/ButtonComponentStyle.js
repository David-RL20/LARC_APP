import React from 'react';
import {StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {connect} from 'react-redux';

const ButtonGroupCustumized = (props) => {
  return (
    <ButtonGroup
      onPress={props.action}
      selectedIndex={props.index}
      buttons={props.buttons}
      containerStyle={{height: 50}}
      buttonStyle={{
        backgroundColor: props.theme.background,
        borderColor: props.theme.borderColor,
        borderWidth: 0.3,
      }}
      selectedButtonStyle={{
        backgroundColor: props.theme.primary,
      }}
      selectedTextStyle={{
        color: props.theme.letterAlternative,
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
  };
};

export default connect(mapStateToProps)(ButtonGroupCustumized);
