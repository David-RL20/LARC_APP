import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {OverLay, Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import FormWrapper from '../../../utils/FormWrapperHorizontal';
import ButtonGroupCustumized from '../../../utils/ButtonComponentStyle';
import {setCalendarIndex} from '../../../../Actions';
class Calendar extends Component {
  constructor() {
    super();
    this.updateSearchIndex = this.updateSearchIndex.bind(this);
  }

  updateSearchIndex(searchMessageIndex) {
    this.props.setCalendarIndex({
      phoneNumber: this.phoneNumber,
      index: searchMessageIndex,
    });
  }

  findDevices() {
    this.device = this.props.devices.filter((device) => {
      if (device.phoneNumber == this.phoneNumber) {
        return device;
      }
    });
    this.device = this.device[0];
    this.searchCmd = this.device.calendar.search;
    this.searchIndex = this.searchCmd.index;
  }
  render() {
    this.phoneNumber = this.props.cellphone;
    this.findDevices();
    const searchOptions = [
      this.props.calendar.searchBy.phoneNumber,
      this.props.calendar.searchBy.serial,
    ];
    const searchMessageIndex = this.searchIndex;
    return (
      <View style={style.container_search}>
        <FormWrapper
          theme={this.props.theme}
          title={this.props.calendar.searchButtonLabel}>
          <ButtonGroupCustumized
            action={this.updateSearchIndex}
            index={searchMessageIndex}
            buttons={searchOptions}
          />
        </FormWrapper>
        <Input
          keyboardType="numeric"
          placeholder="664*******"
          inputContainerStyle={style.input_container_style}
          inputStyle={{color: this.props.theme.settings_calendar_title}}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  container_search: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  label_search: {
    fontFamily: 'Roboto_Bold',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input_container_style: {
    width: '80%',
  },
});
const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    calendar: state.screens.settings_calendar[state.currentLanguage],
    devices: state.devices,
  };
};

const mapDistpatchToProps = {
  setCalendarIndex,
};
export default connect(mapStateToProps, mapDistpatchToProps)(Calendar);
