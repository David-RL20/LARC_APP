import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const Wrapper = (props) => {
  return (
    <View
      style={[
        props.containerStyle,
        style.container,
        {
          height: props.containerStyle?.height || 80,
        },
      ]}>
      <View style={[props.containerTitleStyle]}>
        <Text
          style={[
            props.titleStyle,
            style.title,
            {color: props.theme.titleNormal},
          ]}>
          {props.title}
        </Text>
      </View>
      <View
        style={[
          props.containerChildrenStyle,
          {color: props.theme.titleNormal},
          style.container_Children_Style,
        ]}>
        {props.children}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Roboto_Bold',
    fontWeight: 'bold',
  },
});
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
  };
};
export default connect(mapStateToProps)(Wrapper);
