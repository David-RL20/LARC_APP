import React from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

const Loading = (props) => {
  // setTimeout(()=>{},2000)
  return (
    <View style={[style.container, {backgroundColor: props.theme.background}]}>
      <Image
        style={style.img}
        source={require('../../../assets/images/light_larc.png')}
      />
      <View style={style.container2}>
        <ActivityIndicator color={props.theme.titleNormal} size="large" />
        <Text style={[style.title, {color: props.theme.titleNormal}]}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 50,
  },
  container2: {
    width: '100%',
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 20,
    fontSize: 23,
    fontFamily: 'Roboto_Regular',
  },
});
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    title: state.loading[state.currentLanguage],
  };
};
export default connect(mapStateToProps)(Loading);
