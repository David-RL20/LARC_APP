import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import Icon from '../../utils/Icon';
import HorizontalSeparator from '../../utils/horizontalSeparator';

class SettingsDevice extends Component {
  renderItem({item}) {
    return (
      <TouchableOpacity style={style.container_settings}>
        <Icon width="40" height="40" name={item.logo} />
        <Text style={style.text_settings}>{item.title}</Text>
      </TouchableOpacity>
    );
  }
  keyExtractor(item) {
    return item.title;
  }
  renderSeparator() {
    return (
      <HorizontalSeparator
        style={{borderColor: this.props.theme.borderColor}}
      />
    );
  }
  render() {
    console.log(this.props.settings);
    return (
      <View
        style={[
          style.FlatList_container,
          {backgroundColor: this.props.theme.backgroundColor},
        ]}>
        <FlatList
          style={style.FlatList}
          data={this.props.settings}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator.bind(this)}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    settings: state.screens.device_settings[state.currentLanguage],
    theme: state.themes[state.currentTheme],
  };
};

const style = StyleSheet.create({
  FlatList_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  FlatList: {
    width: '80%',
  },
  container_settings: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_settings: {
    fontFamily: 'Roboto_Bold',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
});

export default connect(mapStateToProps)(SettingsDevice);
