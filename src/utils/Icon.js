import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Images from '../../assets/index';
const Icon = (props) => {
  return <Image style={style.img} source={Images[props.theme][props.name]} />;
};

const style = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: 'contain',
  },
});

const mapStateToProps = (state) => {
  return {
    theme: state.currentTheme,
  };
};

export default connect(mapStateToProps)(Icon);
